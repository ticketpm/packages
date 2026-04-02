import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	resolve: {
		alias: {
			"@ticketpm/core": path.resolve(rootDir, "packages/core/src/index.ts"),
			"@ticketpm/discord-api": path.resolve(rootDir, "packages/discord-api/src/index.ts"),
			"@ticketpm/discordjs": path.resolve(rootDir, "packages/discordjs/src/index.ts")
		}
	},
	test: {
		pool: "forks",
		maxWorkers: 1,
		isolate: false,
		include: ["packages/*/test/**/*.test.ts"]
	}
});
