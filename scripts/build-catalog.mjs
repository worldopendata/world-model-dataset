import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "data", "datasets");
const files = (await readdir(sourceDir)).filter((name) => name.endsWith(".json")).sort();
const records = [];
const ids = new Set();

for (const file of files) {
  const record = JSON.parse(await readFile(path.join(sourceDir, file), "utf8"));
  for (const field of ["id", "name", "year", "summary", "summaryEn", "verdictEn", "wmNoteEn", "primaryTask", "domain", "modalities", "links"]) {
    if (record[field] === undefined) throw new Error(`${file}: missing ${field}`);
  }
  if (ids.has(record.id)) throw new Error(`${file}: duplicate id ${record.id}`);
  if (!Array.isArray(record.domain) || !Array.isArray(record.modalities)) throw new Error(`${file}: tags must be arrays`);
  ids.add(record.id);
  records.push(record);
}

records.sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
await writeFile(path.join(root, "datasets.json"), `${JSON.stringify(records, null, 2)}\n`);
console.log(`Built datasets.json from ${records.length} records.`);
