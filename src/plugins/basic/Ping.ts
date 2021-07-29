import { CommandClient, Command } from "detritus-client";
import Base from "../Base";

export = class Ping extends Base {
    constructor(client: CommandClient) {
        super(client, { name: "ping" });
    }

    async run(context: Command.Context) {
        let ping = await context.client.ping();

        return context.reply("Pinging...").then(msg => {
            msg.edit(`Pong! Gateway: \`${ping.gateway}\`, Rest: \`${ping.rest}\``);
        })
    }
}