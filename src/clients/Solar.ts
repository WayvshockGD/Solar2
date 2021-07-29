import { CommandClient, CommandClientOptions, ShardClientOptions } from "detritus-client";
import { Logger } from "tslog";
import InitCommands from "../InitCommands";
import SlashClient from "./SlashClient";

class Solar extends CommandClient {
    logger: Logger;

    constructor(shardConfig?: ShardClientOptions, clientConfig?: CommandClientOptions) {
        super(new SlashClient(shardConfig), clientConfig);

        this.logger = new Logger();

        InitCommands(this);
    }

    async run() {
        await this.client.run().then(() => {
            this.logger.info("Ready");
        });
        await this.client.slashCommandClient!.run();
        return await super.run();
    }
}

export = Solar;