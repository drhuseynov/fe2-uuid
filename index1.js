const axios = require('axios');
axios('https://www.google.com/')
    .then(res=> console.log(res))
