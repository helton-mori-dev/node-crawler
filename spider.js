var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')
//Lista dos melhores episódios de How I met your mother
request('https://www.imdb.com/search/title/?series=tt0460649&view=simple&count=250&sort=user_rating,desc&ref_=tt_eps_rhs_sm', function(err, res, body) {
    if(err) console.log('Erro ' + err);

    var $ = cheerio.load(body);

    $('.lister-item .col-title .lister-item-header').each(function(){
        var title = $(this).find('span span small + a').text();
        console.log('Titulo: ' + title)
    });
});
