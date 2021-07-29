import { readFileSync } from "fs"
import IConfig from "./IConfig";

export = class Config {
    get getConfig(): IConfig {
        let json = readFileSync("./config.json", { encoding: "utf-8" });

        return JSON.parse(json);
    }

    static get getConfig(): IConfig {
        let json = readFileSync("./config.json", { encoding: "utf-8" });
        return JSON.parse(json);
    }
}