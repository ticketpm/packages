Monorepo for building, validating, proxying, compressing, and uploading `ticket.pm` transcript payloads.

## Workspace layout

- `@ticketpm/core`: shared transcript contract, canonical serialization, validation, compression, and ticket.pm upload/media clients.
- `@ticketpm/discord-api`: adapters for Discord API payloads and generic REST-style enrichment hooks.
- `@ticketpm/discordjs`: adapters for discord.js objects and cache-friendly context builders.

## Tooling

- Package manager and runtime: [Bun](https://bun.com/docs)
- Package runtime support: Bun preferred automatically, Node.js supported for the published packages
- Tests: Vitest, executed with `bun --bun vitest run`
- Build: TypeScript project references

## Commands

```bash
bun install
bun run build
bun --bun vitest run
```

## Publishing

This repository is set up for lockstep releases: all packages must share the same version, and releases are published from GitHub Actions only.

1. Bump the version in each package manifest to the same semver.
2. Merge the release commit to `main`.
3. Create and push a matching Git tag like `v0.0.2`.
4. Approve the `release` GitHub environment when the workflow asks for it.

The release workflow rebuilds the repo, prepares registry-specific publish bundles, dry-runs JSR validation, then publishes to JSR and npm with OIDC.