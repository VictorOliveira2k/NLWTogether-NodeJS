import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1650411482949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [ 
                    {
                        name: "id",
                        type: "uuid", //universal uniq identify
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    }, 
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]      
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
