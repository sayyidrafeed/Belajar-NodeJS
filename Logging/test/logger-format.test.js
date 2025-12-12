import winston from "winston";

test("logging with format", () => {
    const logger = winston.createLogger({
        level: "debug",
        // format: winston.format.simple(),
        format: winston.format.printf(debug => {
            return `${new Date()} : ${debug.level.toUpperCase()} : ${debug.message}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.debug("Halo mas")
});

