import Solar from "./clients/Solar";

export = function(commandClient: Solar) {
    commandClient.addMultipleIn("/src/plugins")
       .then((command) => {
           commandClient.logger.info(
               `Loaded up to ${command.commands.length - 1} command${command.commands.length > 2 ? "s" : ""}`
            );
       })
       .catch((err) => {
           commandClient.logger.trace(err);
       })
}