const db="posts";

function createObject(table_name,values,columnsNum){
    const query=`INSERT INTO ${db}.${table_name} (${values}) VALUES (${columnsNum})`;
    return query;
}
function getObjects(tableName,limit,start) {
    const query = `SELECT * FROM ${db}.${tableName}`;// LIMIT ${limit} OFFSET ${start}
    return query;
}
function getObjectByPram(tableName, objectParam,limit,start,) {
    const query = `SELECT * FROM ${db}.${tableName}  where ${objectParam} = ?`;//LIMIT ${limit} OFFSET ${start}
    return query;
}
function updateObject(table_name,values,idParameter){
    const query=`UPDATE ${db}.${table_name} SET ${values}  WHERE ${idParameter}=?`;
    console.log("update: "+query);
    return query;
}

function deleteObject(table_name,paramToDelete){
    const query=`DELETE FROM ${db}.${table_name} WHERE  ${paramToDelete} = ?`;
    return query;
}

module.exports = {getObjectByPram,getObjects,createObject,deleteObject,updateObject} 