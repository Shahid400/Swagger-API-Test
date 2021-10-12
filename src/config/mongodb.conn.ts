import {connect, connection} from 'mongoose';
export class DbMongo{
    constructor(){}

    connect(h:string, dbName:string, u?:string, pass?:string, p?:number){
        let connectionUrl = `mongodb://${h}/${dbName}`;
        if (u != undefined && pass != undefined) {
            connectionUrl = `mongodb+srv://${u}:${pass}@${h}/${dbName}`;
        }
        connect(connectionUrl, (err:any)=>{
            if(err){
                console.log(err);
                console.log("Database Connection fail!");
            }else
                console.log("Database Connected!")
        });
    }
}