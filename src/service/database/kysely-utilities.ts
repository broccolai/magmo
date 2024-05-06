import {
    KyselyPlugin,
    Migration,
    MigrationProvider,
    OperationNodeTransformer,
    PluginTransformQueryArgs, PluginTransformResultArgs, QueryResult,
    RootOperationNode, UnknownRow, ValueNode
} from "kysely";

export const createManualMigrationProvider = (migrations: Record<string, Migration>): MigrationProvider => {
    return {
        getMigrations(): Promise<Record<string, Migration>> {
            return Promise.resolve(migrations)
        }
    }
}

export class SqliteBooleanPlugin implements KyselyPlugin {
    readonly #transformer = new SqliteBooleanTransformer()

    transformQuery(args: PluginTransformQueryArgs): RootOperationNode {
        return this.#transformer.transformNode(args.node)
    }

    transformResult(args: PluginTransformResultArgs): Promise<QueryResult<UnknownRow>> {
        return Promise.resolve(args.result)
    }
}

class SqliteBooleanTransformer extends OperationNodeTransformer {
    override transformValue(node: ValueNode): ValueNode {
        console.log("doing transform for {}", node.value)
        return {
            ...super.transformValue(node),
            value: typeof node.value === 'boolean' ? (node.value ? 1 : 0) : node.value
        }
    }
}