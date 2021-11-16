const router = require("express").Router();
const path = require("path");
// const Exercise = require("../public/exercise.html");
// const indexHtml = require("../public/index.html");
// const Stats = require("../public/stats.html");



    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
  
    router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  
    router.get('/exercise', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
  
    // If no matching route is found default to home
    router.get('/stats', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
  
    module.exports = router;