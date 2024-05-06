import SQLite from 'better-sqlite3'
import {Kysely, Migrator, SqliteDialect} from 'kysely'
import {DatabaseTables} from "./tables.ts";
import {createManualMigrationProvider, SqliteBooleanPlugin} from "./kysely-utilities.ts";
import {createSetupMigration} from "./migrations/migration-001.ts";

const dialect = new SqliteDialect({
    database: new SQLite('storage.db'),
})

export const db = new Kysely<DatabaseTables>({
    dialect,
    plugins: [new SqliteBooleanPlugin()]
})

const migrator = new Migrator({
    db,
    provider: createManualMigrationProvider({
        "001": createSetupMigration()
    })
})

//todo: cleanup
const { error, results } = await migrator.migrateToLatest();

results?.forEach((it) => {
    if (it.status === "Success") {
        console.log(`Migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === "Error") {
        console.error(`Failed to execute migration "${it.migrationName}"`);
    }
});

if (error) {
    console.error("Failed to migrate");
    console.error(error);
    process.exit(1);
}
