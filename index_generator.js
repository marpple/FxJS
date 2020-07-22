import fs from "fs";
import readline from "readline";
import { go, pipe, split, last } from "./Strict/index.js";

const outputStream = fs.createWriteStream("./index.js");

const write = ({ source_dir, prefix = "", postfix = "" }) =>
  new Promise((res, rej) => {
    const inputStream = fs.createReadStream(`${source_dir}/index.js`);
    const rl = readline.createInterface({
      input: inputStream,
    });

    rl.on("line", (line) =>
      outputStream.write(
        line
          .replace(
            /default as \w+/g,
            pipe(
              split(" "),
              last,
              (func_name) => `default as ${prefix}${func_name}${postfix}`
            )
          )
          .concat("\n")
          .replace(/\.\//, `${source_dir}/`)
      )
    )
      .on("close", (_) => {
        outputStream.write("\n");
        res();
      })
      .on("error", rej);
  });

go(
  write({
    source_dir: "./Strict",
    postfix: "",
  }),
  (_) =>
    write({
      source_dir: "./Concurrency",
      postfix: "C",
    }),
  (_) =>
    write({
      source_dir: "./Lazy",
      postfix: "L",
    })
);
