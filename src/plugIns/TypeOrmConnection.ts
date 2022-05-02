import { createConnection , Connection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { IdataBase } from "../interFace/ConFigs"
import migration from '../migration/index'

export default async function(conFigDB:PostgresConnectionOptions|IdataBase|any):Promise<Connection>{    
    conFigDB.entities = (conFigDB.entities) ? migration : [] ;
    conFigDB.loggin = true
    return createConnection(<PostgresConnectionOptions>conFigDB);
}
