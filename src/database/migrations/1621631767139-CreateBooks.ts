import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateBooks1621631767139 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',

        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'author',
            type: 'varchar'
          },
          {
            name: 'category',
            type: 'varchar'
          },
          {
            name: 'quantity',
            type: 'integer'
          },
          {
            name: 'publisher',
            type: 'varchar'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books')
  }
}
