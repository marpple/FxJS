import fs from "fs";
import {
  apply,
  eachC,
  flatten,
  go,
  last,
  map,
  mapC,
  mapL,
  reduce,
  takeAllC,
  zipL,
} from "../index.js";

const readFile = (path, encoding = "utf-8") =>
  new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, text) => {
      if (err) reject(err);
      else resolve(text);
    });
  });

const writeFile = (path, data, encoding = "utf-8") =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, encoding, (err) => {
      if (err) reject(err);
      else resolve(true);
    });
  });

const readDir = (path) =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });

const DIR_NAMES = ["_internal", "Strict", "Lazy", "Concurrency"];
const CJS_ROOT_INDEX = "./cjs/index.js";
const root_dir_paths = map((dn) => `./${dn}`, DIR_NAMES);
const generateCJSExportSyntax = (file_path) =>
  `module.exports = require('${file_path}')${
    last(file_path.split("/")) === "index.js" ? "" : ".default"
  }`;
const generateCJSExportFiles = (dir_name, file_names) =>
  mapC(
    (fn) =>
      writeFile(
        `./${dir_name}/${fn}`,
        generateCJSExportSyntax(`../cjs/${dir_name}/${fn}`)
      ),
    file_names
  );

const default_sub_path_exports = {
  "./package.json": "./package.json",
  "./esm": "./esm/index.js",
  "./esm/Strict": "./esm/Strict/index.js",
  "./esm/Lazy": "./esm/Lazy/index.js",
  "./esm/Concurrency": "./esm/Concurrency/index.js",
  ".": {
    import: "./mjs/index.js",
    require: "./cjs/index.js",
  },
  "./index": {
    import: "./mjs/index.js",
    require: "./cjs/index.js",
  },
  "./index.js": {
    import: "./mjs/index.js",
    require: "./cjs/index.js",
  },
  "./Strict": {
    import: "./mjs/Strict/index.js",
    require: "./Strict/index.js",
  },
  "./Lazy": {
    import: "./mjs/Lazy/index.js",
    require: "./Lazy/index.js",
  },
  "./Concurrency": {
    import: "./mjs/Concurrency/index.js",
    require: "./Concurrency/index.js",
  },
};

(async function () {
  const fns = await go(
    root_dir_paths,
    mapL(readDir),
    zipL(DIR_NAMES),
    takeAllC
  );
  await eachC(apply(generateCJSExportFiles), fns);
  await writeFile("./index.js", generateCJSExportSyntax(CJS_ROOT_INDEX));
  await go(
    ["./cjs", ...root_dir_paths],
    map((dir_path) => `${dir_path}/package.json`),
    eachC((path) => writeFile(path, '{ "type": "commonjs" }'))
  );
  const package_json_object = JSON.parse(await readFile("./package.json"));
  const function_sub_path_exports = go(
    fns,
    mapL(([dir_name, file_names]) =>
      mapL((fn) => {
        const source_file = `${dir_name}/${fn}`;
        const sub_path = {
          import: `./mjs/${source_file}`,
          require: `./${source_file}`,
        };
        return {
          [`./${source_file.replace(".js", "")}`]: sub_path,
          [`./${source_file}`]: sub_path,
        };
      }, file_names)
    ),
    flatten,
    reduce((acc, field) => Object.assign(acc, field))
  );

  await writeFile(
    "./package.json",
    JSON.stringify(
      Object.assign(package_json_object, {
        exports: {
          ...default_sub_path_exports,
          ...function_sub_path_exports,
        },
      })
    )
  );
})();
