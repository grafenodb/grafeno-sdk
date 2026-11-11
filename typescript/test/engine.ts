// The engine the tests run against: GRAFENO_BIN when set, else a debug
// build of the engine checked out next to this repository (`../grafeno`
// beside `grafeno-sdk`, built with `cargo build -p grafeno-server`), else
// `grafeno` from the PATH (an installed engine).

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const exe = process.platform === "win32" ? ".exe" : "";
const sibling = fileURLToPath(new URL(`../../../grafeno/target/debug/grafeno${exe}`, import.meta.url));

export const engineBinary = process.env.GRAFENO_BIN ?? (existsSync(sibling) ? sibling : `grafeno${exe}`);
