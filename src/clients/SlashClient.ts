import { ShardClientOptions, SlashCommandClient } from "detritus-client";
import SolarShardClient from "./SolarShardClient";

export = class SlashClient extends SlashCommandClient {
    constructor(config?: ShardClientOptions) {
        super(new SolarShardClient(config));

        this.addMultipleIn("./src/slash");
    }
}