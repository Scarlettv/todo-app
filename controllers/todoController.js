
// const bodyParser  = require('body-parser');
// const urlencodeParser = bodyParser.urlencoded({extended: false});
// module.exports = function(app,db){
//
//   //reading data
//   app.get('/todo',function(req, res){
//     console.log('we reading');
//     // let item= {item:'my second post'}
//      let sql = 'SELECT * FROM todoItems;';
//     db.query(sql, function(err, results) {
//       if(err) throw err;
//       console.log(results);
//       res.render('todo',{todos: results});
//     });
//   });
//
//
//   //posting data
//   app.post('/todo',urlencodeParser, function(req, res){
//     console.log('we posting');
//     let item=req.body;
//     console.log(item);
//     let sql = 'INSERT INTO todoItems SET ?';
//     db.query(sql, item, (err, result) => {
//       if(err) throw err;
//       console.log(result);
//       res.json(result);
//     });
//
//   });
//
//   //destroying data
//   app.delete('/todo/:id',function(req, res){
//       console.log('we deleting');
//       console.log(req.params.item);
//       let sql=`DELETE FROM todoItems WHERE id= ${req.params.id};`;
//       db.query(sql,  (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.json(result);
//       });
//     //   data = data.filter(function(todo) {
//     //   return todo.item.replace(/ /g,'-') !== req.params.item ; //this replaces spaces with hyphens
//     //   });
//     //
//     // res.json(data);
//   });
// };

const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extended: false});
module.exports = function(app, db) {
  // reading data
  app.get('/todo', function(req, res) {
    console.log('we reading');
      let sql = 'SELECT * FROM todoitems;';
      db.query(sql, function(err, results) {
        if (err) throw err;
        console.log(results);
        res.render('todo', {todos: results});
      });
  });

  // posting data
  app.post('/todo', urlencodeParser, function(req, res){
    console.log('we posting');
    let item = req.body;
    console.log(item);
    let sql = 'INSERT INTO todoitems SET ?';
    db.query(sql, item, (err, result) => {
    if (err) throw err;
    console.log(result);
  res.json(result);
});
});

  // destroying data
  app.delete('/todo/:id', function(req, res) {
    console.log('we deleting');
    console.log(req.params.item);
    let sql =`DELETE FROM todoitems WHERE id = ${req.params.id};`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
  });
});

};
