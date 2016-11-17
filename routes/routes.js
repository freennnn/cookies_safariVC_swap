var appRouter = function(app) {
  app.get("/ping", function(req, res) {
    res.send("ping ping")
  });
}
module.exports = appRouter;
