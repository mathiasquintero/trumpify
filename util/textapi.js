var AYLIENTextAPI = require('aylien_textapi');

// I know I should put this somewhere secure. 
// MEH... I just don't care ;)

var textapi = new AYLIENTextAPI({
  application_id: "c751188f",
  application_key: "75e92817bce96eb1e0cb1474771036d6"
});

module.exports = textapi;
