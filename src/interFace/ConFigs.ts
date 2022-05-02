const _conFig : IconFig = {
    port: Number(process.env.PORT?.toString().trim()) || 5570,
    cors : (process.env.CORS?.toString().trim() == 'true') ? true : { origin:process.env.CORS?.split(',') } || true ,
    dataBase:{
        "connectTimeoutMS" : Number(String(process.env.POSTGRES__CONNECTTIMEOUTMS).trim()) || 10000,
        "database" : process.env.POSTGRES__DATABASE?.toString().trim() || 'postgres',
        "host" : process.env.POSTGRES__HOST?.toString().trim() ,
        "name" : process.env.POSTGRES__NAME?.toString().trim() || 'postgresNote',
        "schema" : process.env.POSTGRES__SCHEMA?.toString().trim() || 'public',
        "username" : process.env.POSTGRES__USERNAME?.toString().trim() ,
        "password" : process.env.POSTGRES__PASSWORD?.toString().trim() ,
        "port" : Number(process.env.POSTGRES__PORT?.toString().trim()) ,
        "synchronize" : (process.env.POSTGRES__SYNCHRONIZE?.toString().trim() == 'true') ? true : false || true,
        "entities" : (process.env.POSTGRES__ENTITIES?.toString().trim() == 'true') ? true : false || true,
        "logging" : (process.env.POSTGRES__LOGING?.toString().trim() == 'true') ? true : false || false,
        "migrationsRun" : (process.env.POSTGRES__MIGRATION_RUN?.toString().trim() == 'true') ? true : false || true,
        "type" : process.env.POSTGRES__TYPE?.toString().trim() || 'postgres',    
    }
}

export default _conFig

export interface IconFig {
    port: number | undefined;
    cors: any;
    dataBase: IdataBase;
}

export interface IdataBase {
    connectTimeoutMS  : number;
    database  : string | undefined;
    host  : string | undefined | number;
    name  : string | undefined; 
    schema  : string | undefined;
    username  : string | undefined;
    password  : string | undefined;
    port  : number | undefined;
    synchronize: string | undefined | boolean ;
    entities?  : string | undefined | boolean ;
    logging: string | undefined | boolean ;
    migrationsRun : string | undefined | boolean ;
    type  : string | undefined;
}
