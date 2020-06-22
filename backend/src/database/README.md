# Database commands

## DB manipulation
- yarn sequelize db:migrate | roda todas as migrations
- yarn sequelize migration:create --name=**NAME** | cria a migration
- yarn sequelize db:migrate:undo | desfaz a última migration
- yarn sequelize db:migrate:undo:all | desfaz a tadas as migration

## DB data manipulation
- yarn sequelize seed:generate --name **NAME** | cria uma seed
- yarn sequelize db:seed:undo | desfaz a última seeder
- yarn sequelize db:seed:all | roda todas as seeds
