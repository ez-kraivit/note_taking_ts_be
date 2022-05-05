import { createConnection, Connection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { IDataBase } from "../interFace/ConFigs"
import migration from '../migration/index'

export default async function (conFigDB: PostgresConnectionOptions | IDataBase | any): Promise<Connection> {
    conFigDB.entities = (conFigDB.entities) ? migration : [];
    conFigDB.loggin = true
    return createConnection(<PostgresConnectionOptions>conFigDB);
}
