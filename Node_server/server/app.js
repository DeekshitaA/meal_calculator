var path = require('path');
var express = require('express');
var app = express();
var partnerData = require('./partner_data');
var rewardSearchData = require('./rewardSearch_data');
var morgan = require('morgan');
var _ = require('lodash');
var bodyParser = require('body-parser');

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');


app.use(morgan('dev'));

app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function(req, res) {
    res.sendFile(indexHtmlPath);
});

// app.get('/audit', function(req, res) {
    // if(req.query.clientId === 'MR_DG') {
        // res.send({auditId: audit_id});
    // } else {
        // res.sendStatus(401);
    // }
// });

// app.get('/LA',function(req,res) {
    // if(req.query.auditId === audit_id) {
        // res.send(account);
    // } else {
        // res.sendStatus(401)
    // }
// });

// app.get('/pageContext',function(req,res) {
    // if(req.query.loyaltyKey === account.loyaltyKey && req.query.tier === account.loyaltyTier && req.query.auditId === audit_id) {
        // res.send({
            // itag_details: {
                // varA : "something",
                // varB : "something else",
                // varC : "one more thing"
            // }
        // });
    // } else {
        // res.sendStatus(401);
    // }
// });

app.get('/partner', function(req,res) {
    res.send(partnerData);
});

app.get('/rewardSearch' ,function(req,res) {
               res.send(rewardSearchData);
});
// app.get('/product/:productId', function(req, res) {
    // var match = findOne(detailData, req.params.productId);
    // match.pdf = pdfObject.pdf;
    // res.send(match);
// });

// app.get('/product/:productId/updateLanding', function(req, res) {
    // var updatedLanding = findOne(landingData, req.params.productId);
    // updatedLanding.card_balance = updatedLanding.card_balance - 10.95;
    // setTimeout(function(){
        // res.send(updatedLanding);
    // },2000)
// });

// app.get('/product/:productId/updateDetail', function(req, res) {
    // var updatedDetail = findOne(detailData, req.params.productId);
    // updatedDetail.card_balance = updatedDetail.card_balance - 10.95;
// ;    setTimeout(function(){
        // res.status(200).send(updatedDetail);
    // },2000)
// });

// app.post('/product/:productId/reload', function(req,res) {
    // var card = findOne(detailData,req.body.product_id);
    // card['card_balance'] = +req.body['card_balance'] + +req.body.reload_value;
    // setTimeout(function(){
        // res.status(201).send(card);
    // },2000);
// });

module.exports = app;
