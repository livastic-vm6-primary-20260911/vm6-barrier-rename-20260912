import { readFileSync } from "node:fs";

const expectedCorpus = [
  "8bbebb6d331a2b402698-f4178bc7c5367be4b72a",
  "8bbebb6d331a2b402698-1ac0be9ee4955afa41e1",
];
const payload = JSON.parse(readFileSync(new URL("../data/payload.json", import.meta.url), "utf8"));

if (
  payload === null ||
  typeof payload !== "object" ||
  Array.isArray(payload) ||
  Object.keys(payload).sort().join(",") !== "corpus,slice" ||
  JSON.stringify(payload.corpus) !== JSON.stringify(expectedCorpus) ||
  !Array.isArray(payload.slice) ||
  payload.slice.length < 1 ||
  payload.slice.length > expectedCorpus.length ||
  new Set(payload.slice).size !== payload.slice.length ||
  payload.slice.some((id) => !expectedCorpus.includes(id))
) {
  throw new Error("payload.json does not match the trusted corpus/slice contract.");
}
