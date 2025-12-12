import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily-rotate-file", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: 1024,
                maxFiles: "1d"
            })
        ]
    })

    for (let i = 0; i < 1000; i++) {
        logger.info("logging logging with daily-rotate-file");
    }
});