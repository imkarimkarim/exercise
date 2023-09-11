var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let json = {
    links: [
      {link:'https://github.com/octokit/rest.js', title:'octokit / rest.js '},
      {link:'https://github.com/adam-golab/react-developer-roadmap', title:'adam-golab / react-developer-roadmap '},
      {link:'https://github.com/docsifyjs/docsify', title:'docsifyjs / docsify'},
      {link:'https://github.com/junegunn/vim-plug', title:'junegunn / vim-plug '},
    ]
  }
  res.json(json);
});

module.exports = router;
