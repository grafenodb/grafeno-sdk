# grafeno-sdk

The official SDKs for [Grafeno](https://github.com/grafenodb/grafeno), the
graph engine for agent memory and knowledge. Each SDK lives in its own
folder, with its own version, changelog, tests and workflows; they all speak
the engine's public HTTP API (version 1) and check what an engine can do
before using it (`GET /v1/about`).

| SDK | Folder | Package | Install |
| --- | --- | --- | --- |
| TypeScript and JavaScript | [`typescript/`](typescript/README.md) | [`@grafenodb/client`](https://www.npmjs.com/package/@grafenodb/client) | `npm install @grafenodb/client` |

## How the SDKs are built and released

- **Separate pipelines.** Each SDK has its own workflow in
  `.github/workflows/`, named after its folder (`typescript.yml`), which runs
  only when that folder (or the workflow) changes. Publishing goes through
  one workflow, `publish.yml`, the file the registries trust (trusted
  publishing), with a job per SDK that runs only for that SDK's tags.
- **Tested against the real engine.** An SDK's tests start `grafeno serve`
  and talk to it. In this repository they run against the engine's
  published releases (downloaded from
  [grafenodb/grafeno](https://github.com/grafenodb/grafeno/releases)); the
  engine's own CI runs them against every engine change before it lands.
- **Tagged per SDK.** A release is a tag `<folder>-v<version>`, such as
  `typescript-v0.2.0`, whose version matches the SDK's package and has a
  section in its `CHANGELOG.md`; the publish workflow tests it again and
  publishes it to the language's registry.

## Developing with a local engine

Check out the engine next to this repository and build it:

```bash
git clone https://github.com/grafenodb/grafeno.git ../grafeno
```

```bash
cargo build --manifest-path ../grafeno/Cargo.toml -p grafeno-server
```

The SDKs' tests use that build when they find it (or the binary in
`GRAFENO_BIN`, or `grafeno` from the PATH).

## License

MIT or Apache-2.0, at your choice: [LICENSE-MIT](LICENSE-MIT),
[LICENSE-APACHE](LICENSE-APACHE).
