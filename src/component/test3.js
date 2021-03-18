// reading from file and adding all values

import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "filestructue.json");

const values = fs.readFileSync(filePath);
const data = JSON.parse(values);

const sumValues = data.map((d) => d.value).reduce((sum, el) => sum + el, 0);
console.log("sumValues", sumValues);
