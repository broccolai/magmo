import {Kysely, Migration} from 'kysely'

export const createSetupMigration = (): Migration => {
    return {
        async up(db: Kysely<any>): Promise<void> {
            await db.schema
                .createTable('match')
                .addColumn('match_id', 'varchar', (col) => col.primaryKey())
                .addColumn('owner_id', 'varchar', (col) => col.notNull())
                .addColumn('win', 'boolean', (col) => col.notNull())
                .addColumn('team_one_id', 'integer', (col) => col.notNull())
                .addColumn('team_two_id', 'integer', (col) => col.notNull())
                .execute()

            await db.schema
                .createTable('player_team')
                .addColumn("match_id", 'varchar')
                .addColumn('team_id', 'integer')
                .addColumn('player_id', 'varchar')
                .addPrimaryKeyConstraint('primary_key', ['match_id', 'team_id', 'player_id'])
                .execute()
        }
    }
}