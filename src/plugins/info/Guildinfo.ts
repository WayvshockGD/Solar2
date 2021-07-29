import { Command, CommandClient, Utils } from "detritus-client";
import { MessageEmbedField } from "detritus-client/lib/structures";
import { Colors } from "../../Constants";
import Base from "../Base";

interface args {
    server: string;
}

export = class Guildinfo extends Base {
    constructor(client: CommandClient) {
        super(client, { name: "guildinfo" });

        this.aliases = ["serverinfo"];
        this.label = "server";
    }

    run(context: Command.Context, { server }: args) {
        let guild = (server.length) ? context.client.guilds.get(server) : context.guild;

        if (!guild) {
            return context.editOrReply("Could not find that guild in cache.");
        }

        let embedValue = new Utils.Embed()
            .setTitle(`Guild: ${guild.name}`)
            .setColor(Colors.ICE_BLUE);

        let fields = [
            {
                name: "ID",
                value: guild.id,
            },
            {
                name: "Member Count",
                value: guild.members.size
            }
        ]

        for (let field of fields) {
            embedValue.addField(field.name, 
                (typeof field.value === "number") ? field.value.toString() : field.value
            );
        }
            
        return context.editOrReply({
            embed: {
                ...embedValue.toJSON(),
            }
        })
    }
}