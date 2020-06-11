var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var comentariosRouter = require('./routes/comentarios');
var produtosRouter = require('./routes/produtos');
var servicosRouter = require('./routes/servicos');
var profissionaisRouter = require('./routes/profissionais');
var portfoliosRouter = require('./routes/portfolios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:'growing',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 },
}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comentarios', comentariosRouter);
app.use('/produtos', produtosRouter);
app.use('/servicos', servicosRouter);
app.use('/profissionais', profissionaisRouter);
app.use('/portfolios', portfoliosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in develop  nt
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;