var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
var dept = [

    {   id: 'dept0',
        name: 'Network Engineering',
        title: 'NE',
        href: '/ne',
        css: '/stylesheets/neStyle.css',
        js: '/javascripts/neJS.js',
        image: '/images/CIISO.jpg'
    },

    {   id: 'dept1',
        name: 'Business Continuity',
        title: 'BC',
        href: '/bc',
        css: '/stylesheets/bcStyle.css',
        js: '/javascripts/bcJS.js',
        image: '/images/BC.jpg'
    },
    
    {   id: 'dept2',
        name: 'CIMP',
        title: 'CIMP',
        href: '/cimp',
        css: '/stylesheets/cimpStyle.css',
        js: '/javascripts/cimpJS.js',
        image: '/images/CIMP.jpg'
    },
	{   id: 'dept0',
        name: 'Human Resources',
        title: 'HR',
        href: '/hr',
        css: '/stylesheets/hrStyle.css',
        js: '/javascripts/hrJS.js',
        image: '/images/HR.jpg'
    },

    {   id: 'dept1',
        name: 'Deployment Engineering',
        title: 'DE',
        href: '/de',
        css: '/stylesheets/deStyle.css',
        js: '/javascripts/deJS.js',
        image: '/images/DE.jpg'
    },
    
    {   id: 'dept2',
        name: 'OPS',
        title: 'OPS',
        href: '/ops',
        css: '/stylesheets/opsStyle.css',
        js: '/javascripts/opsJS.js',
        image: '/images/ops.jpg'
    }
]

app.locals.depts = dept;
app.locals.month = 1;
app.locals.deptNum = dept.count;

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
