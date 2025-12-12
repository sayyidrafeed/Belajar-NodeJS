import winston from "winston";
import TransportStream from "winston-transport"

test("Create new transport", () => {
    class MyTransport extends TransportStream {
        constructor(options) {
            super(options);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next()
        }
    }

    const logger = winston.createLogger({
        transports: [
            new MyTransport({})
        ]
    })

    logger.error("error");
    logger.info("info");
    logger.error("error");
    logger.info("debug");
    logger.debug("debug");
})

