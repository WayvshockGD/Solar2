import { ShardClient, ShardClientOptions } from "detritus-client";
import dotenv from "dotenv";

dotenv.config();

export = class SolarShardClient extends ShardClient {
    constructor(config?: ShardClientOptions) {
        super(process.env.TOKEN!, config);
    }
}