import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.File({
            handleExceptions: true,
            filename: "logging-rejection.log"
        })
    ]
})

async function main() {
    return Promise.reject("De ade lu.")
}

main();