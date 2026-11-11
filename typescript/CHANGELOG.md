# Changes to @grafenodb/client

The TypeScript SDK has its own versions, tagged `typescript-v<version>` in
this repository; a version's section here is its release's notes, and the
publish workflow refuses a tag whose version has no section. It speaks the
engine's HTTP API version 1 and works with every engine release from 0.1.0
(`connect()` and `supports()` tell what each one can do).

## 0.2.0

The first release on npm, as `@grafenodb/client` (it lived inside the
engine's repository as `grafeno-client`, and was never published under
that name).

- **Connecting**: one engine or the members of a cluster (`url: [...]`),
  moving to the next member when one does not answer, reading its own
  writes anywhere, with `consistency`, idempotency keys, `spread` and
  `split`; `connect()` checks the API version and `supports()` the
  capabilities, also on 0.1.0 engines.
- **Access**: a token, an API key, or a password sign-in whose session
  renews itself (`onSession`); accounts, keys, roles, grants, record
  policies and the audit log.
- **The graph**: nodes, edges and facts with valid and record time,
  batches, `readMany`, neighborhoods, paths and subgraphs; GQ queries
  with parameters, `trace`, and explicit transactions (`begin()`,
  `transaction()`).
- **Search and memory**: full-text indexes and hybrid search, vector
  indexes and similar nodes, recall and context for prompts, entity
  resolution and merges.
- **Analysis and events**: every graph algorithm with its modes
  (`algorithm(name, {stats, write})`), and the values of event
  subscriptions (`events()`).
