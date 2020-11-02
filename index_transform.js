import fs from "fs";

const read = (source_dir) => {
  return new Promise((res, rej) => {
    fs.readFile(`${source_dir}/index.mjs`, "utf-8", (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
};

const write = (source_dir, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(`${source_dir}/index.mjs`, data, (err) => {
      if (err) rej(err);
      else res(true);
    });
  });
};

(async function () {
  const root_index_data = await read(".");
  await write(".", root_index_data.replace(/\.js/g, ".mjs"));

  const strict_index_data = await read("./Strict");
  await write("./Strict", strict_index_data.replace(/\.js/g, ".mjs"));

  const lazy_index_data = await read("./Lazy");
  await write("./Lazy", lazy_index_data.replace(/\.js/g, ".mjs"));

  const concurrency_index_data = await read("./Concurrency");
  await write("./Concurrency", concurrency_index_data.replace(/\.js/g, ".mjs"));
})();
