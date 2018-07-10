// catch 404 and forward to error handler TODO: move to config/APIerror.js
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler TODO: move to config/APIerror.js
app.use(function(err, req, res, next) {
  // set locals, only providing error in dev
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render error page
  res.status(err.status || 500);
  res.render('error');
});
