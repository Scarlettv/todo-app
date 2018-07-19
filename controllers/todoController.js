
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
//   app.post('/todo', function(req, res){
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
module.exports = function(app, db, passport) {
  // reading data
  app.get('/todo', isLoggedIn, function(req, res) {
    console.log('we reading');
    console.log(req.user);
      let sql = 'SELECT * FROM todoitems WHERE userID= '+ req.user.id +';';
      db.query(sql, function(err, results) {
        if (err){
          throw err;
        }
        console.log(results);
        res.render('todo', {todos: results, user: req.user});
      });
  });

  // posting data
  app.post('/todo', urlencodeParser, function(req, res){
    console.log('we posting');
    let item = req.body;
    item['userID'] = res.user.id;
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




  //Display sign up
    app.get('/signup', function(req,res) {
  	   res.render('signup');
  }
    );
  // //handling signup form
  app.post('/signup', passport.authenticate('local-signup',  {
     successRedirect: '/todo',
     failureRedirect: '/signup'}
    )
  );

  //Display signin
  app.get('/signin', function(req,res) {
   res.render('signin', {message: req.flash('loginmessage')});
  });

//handling signin form
app.post('/signin', passport.authenticate('local-signin', {
   successRedirect: '/todo',
   failureRedirect: '/signin'}
 )
);

//destroying sessions
  app.get('/logout', function(req,res){
    req.session.destroy(function(err)  {
    res.redirect('/signin');
  });
});




};
function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();

      res.redirect('/signin');
  }
