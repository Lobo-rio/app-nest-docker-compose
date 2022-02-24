module.exports = {
    type: 'postgres',
    host: 'localhost',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'admin@',
    database: 'appnestjs',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};