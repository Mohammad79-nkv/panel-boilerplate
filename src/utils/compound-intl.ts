// @ts-ignore

const fs = require('fs');
const glob = require('glob');
const mkdirpSync = require('mkdirp');

const MESSAGES_PATTERN = { en: "./src/**/en.json", fa: "./src/**/fa.json" };
const LANG_DIR = "./src/translations/";

Object.keys(MESSAGES_PATTERN).map((key, index) => {
  // @ts-ignore

  const defaultMessages = glob
    // @ts-ignore

    .sync(MESSAGES_PATTERN[key], { ignore: [] })
    .map((fileName) => fs.readFileSync(fileName, "utf8"))
    .map((file) => JSON.parse(file))
    .reduce((collection, descriptors) => {
      for (const key in descriptors) {
        if (descriptors.hasOwnProperty(key)) {
          if (collection.hasOwnProperty(key)) {
            throw new Error(`Duplicate message id: ${key}`);
          }
          collection[key] = descriptors[key];
        }
      }
      return collection;
    }, {});

  mkdirpSync.sync(LANG_DIR);
  fs.writeFileSync(
    LANG_DIR + "main-" + key + ".json",
    JSON.stringify(defaultMessages, null, 2)
  );
});
