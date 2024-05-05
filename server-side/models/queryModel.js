const db="posts";

function createObject(table_name,values,columnsNum){
    const query=`INSERT INTO ${db}.${table_name} (${values}) VALUES (${columnsNum})`;
    console.log("query:  "+ query);
    return query;
}
function getObjects(tableName,limit,start) {
    console.log("in get query from table: "+ tableName);
    const query = `SELECT * FROM ${db}.${tableName}`;// LIMIT ${limit} OFFSET ${start}
    console.log(query)
    return query;
}
function getObjectByPram(tableName, objectParam,limit,start,) {
    console.log("in get query where param : "+objectParam);
    const query = `SELECT * FROM ${db}.${tableName}  where ${objectParam} = ?`;//LIMIT ${limit} OFFSET ${start}
    return query;
}
function updateObject(table_name,values,idParameter){
    const query=`UPDATE ${db}.${table_name} SET ${values}  WHERE ${idParameter}=?`;
    return query;

}

function deleteObject(table_name,idParameter){
    const query=`DELETE FROM ${db}.${table_name} WHERE  ${idParameter} = ?`;
    return query;
}

module.exports = {getObjectByPram,getObjects,createObject,deleteObject,updateObject} 