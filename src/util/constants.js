const CONSTANTS = {
    DATABASE_PORT: process?.env?.DATABASE_PORT || "0000",
    DATABASE_HOST: process?.env?.DATABASE_HOST || "test",
    DATABASE_NAME: process?.env?.DATABASE_NAME || "test",
    DATABASE_USERNAME: process?.env?.DATABASE_USERNAME || "test",
    DATABASE_PASSWORD: process?.env?.DATABASE_PASSWORD || "test"
};

module.exports = { CONSTANTS };