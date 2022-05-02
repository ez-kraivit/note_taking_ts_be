### Install Global
```
npm install -g env-cmd
npm install -g glob
npm install -g typescript
npm install -g ts-node
```

### Docker Setup
```
    docker-compose  -f ./postgres/docker-compose.yml up -d    
    docker-compose  -f ./postgres/docker-compose.yml down
```

### BackEnd Setup
```
    yarn dev || yarn start
```

### NodeJS Version
- v14.17.3 {node}
- 6.14.13 {npm}
- 1.22.5 {yarn}

### Create ENV ./config/dev.env
```
PORT = 5080
CORS = true
POSTGRES__HOST = 0.0.0.0
POSTGRES__USERNAME = postgres
POSTGRES__PASSWORD = postgres
POSTGRES__PORT = 5423
POSTGRES__SCHEMA = public
```

### Send API Thunder Client 
```
    /// Extensions VS Code Install Thunder Client
    Import (Bulk) -> api / thunder-collection_note.json
```