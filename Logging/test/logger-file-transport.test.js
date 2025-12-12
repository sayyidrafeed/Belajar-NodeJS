import winston from "winston";

test("logging with format", () => {
    const logger = winston.createLogger({
        level: "debug",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                level: "silly",
                filename: "logging-full.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "logging-error.log"
            })
        ]
    })

    logger.debug("Halo mas")
    logger.debug("Halo dek")
    logger.error("Iiii takott")
});