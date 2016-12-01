var Cookies = require("js-cookie")
var express = require('express')
var bodyParser = require('body-parser')

var appRouter = function(app) {
  app.get('/', function(request, response) {
    response.sendFile('home.html', { root: __dirname + "/" } );Î
  })

  app.get("/ping", function(req, res) {
    res.send("ping ping")
  });

  app.get('/link/urlscheme/:urlscheme/appname/:appname', function(req, res) {
      if (req.params.urlscheme || req.params.appname) {
          //Cookies.set('tratata', 'blablabla');
          res.cookie(/*"Linked_" + */req.params.urlscheme, req.params.urlscheme + ';' +  req.params.appname);//.send('Added to cookies/linked');
          console.log(res)
          return res.sendFile('checkout_tracking.html', { root: __dirname + "/../" } );
      } else {
          return res.send(createError())
      }
  });

  /*
  app.get("/link/", function(req, res) {

      // var urlScheme = req.params['urlscheme'];
      // var appName = req.params['appname'];

      var urlScheme = req.params[0];
      var appName = req.params[1];

      if (urlScheme && appName) {
          response.sendFile('home.html', { root: __dirname + "/" } );
      }
      // if (req.param.urlscheme || req.param.appname) {
      //       res.cookie("Linked_" + req.param.urlscheme, req.param.urlscheme + req.param.appname);
      //       //return res.send(req.body);
      //   } else {
      //       return res.send(createError())
      //   }
    });

  app.post("/link", function(req, res) {
    //return res.send("link?")//+ req.body.urlsheme);
    if (req.param.urlscheme || req.param.appname) {
        res.cookie("Linked_" + req.param.urlscheme, req.param.urlscheme + req.param.appname);
        return res.send(req.body);
    }

    if (!req.body.urlscheme || !req.body.appname || !req.body.username) {
      console.log(req.body, req.body.urlscheme)
      return res.send(req.body);

    //    return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        Cookies.set("Linked_" + req.body.urlscheme, req.body.urlscheme + req.body.appname + req.body.username, { expires: 7 })
        Cookies.set('tratata', 'blablabla');
        var tempCookies = Cookies.get('tratata');
        console.log(Cookies.get());
        res.cookie("Linked_" + req.body.urlscheme, req.body.urlscheme + req.body.appname + req.body.username);
        return res.send(req.body);
    }
  });
*/

  app.get("/linked", function(req, res) {
      console.log(Cookies.get());
      console.log("Cookies :  ", req.cookies);
      res.sendFile('get_safari_cookies.html', { root: __dirname + "/../"} );
  //    window.location = "payprovider1://req.cookies"
  //    return res.send(req.cookies);
    //     console.log(req.cookies);
    //     console.log("linked API called")
    // res.send("blahblah")
  //  return document.cookie
  //   if (document.cookie && document.cookie != '') {
  //     var pairs = document.cookie.split(";");
  //     console.log(pairs);
  //     var cookies = {};
  //     for (var i = 0; i < pairs.length; i++ ){
  //       var pair = pairs[i].split("=");
  //       cookies[pair[0]] = unescape(pair[1]);
  //     }
  //     return cookies;
  //   }  esel {
  //     return "no cookies"
  //   }
  });

  // var getCookies = function() {
  //    if (document.cookie && document.cookie != '') {
  //      var pairs = document.cookie.split(";");
  //      console.log(pairs);
  //      var cookies = {};
  //      for (var i = 0; i < pairs.length; i++ ){
  //        var pair = pairs[i].split("=");
  //        cookies[pair[0]] = unescape(pair[1]);
  //      }
  //      return cookies;
  //    }  esel {
  //      return "no cookies"
  //    }
  // }

}

module.exports = appRouter;
