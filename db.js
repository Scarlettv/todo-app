module.exports= function (mysql) {
  const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Floating5',
    database : 'todo'
  });

  db.connect(function(err){
  if(err){
    throw err;
  };
  console.log('Mysql is connected');
  });
  return db;
}
