
import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    if (!file) throw new Error('File not found!');
  return parser.format(path.extname(file.originalname).toString(), file.buffer);
}

export default getDataUri;
