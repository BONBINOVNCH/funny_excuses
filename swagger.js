const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Excuses API",
            version: "1.0.0",
            description: "API для роботи з відмазками",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./routes/*.js"], // шлях до твого файлу з роутами
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;