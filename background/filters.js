import { DbData } from './constants.js';
import Database from './indexdb/index.js';


export const saveFilters = async (prId, mapping) => {
    const db = new Database(DbData.dbName, DbData.dbVersion);
    await db.createOrGetTable(DbData.tables.prs.tableName, DbData.tables.prs.keyPath);
    const existingVal = await db.getValue(prId);

    if(existingVal){
        await db.update({
            id: prId,
            mapping
        });
    }else{
        await db.add({
            id: prId,
            mapping
        });
    }
}

export const clearFilters = async (prId) => {
    const db = new Database(DbData.dbName, DbData.dbVersion);
    await db.createOrGetTable(DbData.tables.prs.tableName, DbData.tables.prs.keyPath);
    await db.clearTable(prId);
}

export const getFilters = async (prId) => {
    const db = new Database(DbData.dbName, DbData.dbVersion);
    await db.createOrGetTable(DbData.tables.prs.tableName, DbData.tables.prs.keyPath);
    const val =  await db.getValue(prId);
    return val
}