import { ShardClientOptions } from "detritus-client";
import Solar from "./src/clients/Solar";
import dotenv from "dotenv";
import Config from "./src/config/Config";

dotenv.config();

let config: ShardClientOptions["gateway"] = {
    identifyProperties: {
        "$browser": "Discord iOS",
        "$device": "Discord iOS"
    },
    compress: true
};

(async () => {
    await new Solar({
        "imageFormat": "jpeg",
        "cache": { "messages": { "expire": 36000000 }}, // Every 10 hours.
        "gateway": { ...config }
    }, {
        "imageFormat": "jpeg",
        "ignoreMe": false,
        "cache": { "messages": { "expire": 36000000 }},
        "gateway": { ...config },
        "prefixes": [
            ...Config.getConfig.prefix
        ],
        "activateOnEdits": true,
    }).run();
})();