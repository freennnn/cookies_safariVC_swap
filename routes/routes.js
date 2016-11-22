var Cookies = require("js-cookie")
var express = require('express')
var bodyParser = require('body-parser')

var appRouter = function(app) {
  app.get('/', function(request, response) {
    response.sendFile('home.html', { root: __dirname + "/" } );
  })

  app.get("/ping", function(req, res) {
    res.send("ping ping")
  });

  app.post("/link", function(req, res) {
    //return res.send("link?")//+ req.body.urlsheme);
    if (!req.body.urlscheme || !req.body.appname || !req.body.username) {
      console.log(req.body, req.body.urlscheme)
      return res.send(req.body);

    //    return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        Cookies.set("Linked_" + req.body.urlscheme, req.body.urlscheme + req.body.appname + req.body.username)
        Cookies.set('tratata', 'blablabla');
        var tempCookies = Cookies.get('tratata');
        console.log(Cookies.get());
        return res.send(req.body);
    }
  });

  app.get("/linked", function(req, res) {
    return res.send(Cookies.get());
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
