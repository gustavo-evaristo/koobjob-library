"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['./dist/models/entities/*.js'],
    migrations: ['./dist/database/migrations/*.js'],
    cli: {
        entitiesDir: './dist/models/entities',
        migrationsDir: './dist/database/migrations'
    }
};
