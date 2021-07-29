import { Command } from "detritus-client/lib/command";
import { Command as BaseCommand } from "detritus-client";

export = class Base extends Command {
    run(context: BaseCommand.Context, args: { [key: string]: any }) {}
}