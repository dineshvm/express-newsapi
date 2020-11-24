const express = require('express');
const request = require('request');

const router = express.Router();
const APP_CONSTANT = require('./app_constant');
const NEWS_DATA = require('./../json/data.json');
const ERROR_DATA = require('./../json/error.json');

/**
 * @name basepath
 * @description  Base end point to check whether app is started or not.
*/
router.get('/', function (req, res) {
    res.json({
        msg: 'News App - API Server Started',
        status: 200
    });
})

/**
 * @name getNewsArticles
 * @description  End point to get the latest news articles based on the query params from the newspai
 * */
router.get('/getNewsArticles', function (req, res) {
    const category = req.query.category;
    const searchStr = req.query.searchStr;
    const params = {
        country: APP_CONSTANT.COUNTRY,
        category,
        ...(searchStr && { q: searchStr }),
        apiKey: APP_CONSTANT.SECRET_KEY,
    }
    let formattedUrl = getEncodedQueryParamsURL(APP_CONSTANT.API_URL, params);
    const options = {
        url: formattedUrl,
        headers: {
            'Accept': 'application/json'
        }
    };

    request.get(options, function (err, response, body) {
        if (err || body.status == 'error') {
            res.status(err.status);
            res.send(ERROR_DATA);
        } else {
            let data = [];
            if (body) {
                let newsRes = JSON.parse(body);
                if (newsRes && newsRes.articles) {
                    data = newsRes && newsRes.articles.map(news => ({
                        title: news.title,
                        source: news.source.name,
                        description: news.description,
                        author: news.author,
                        newsurl: news.url,
                        imageurl: news.urlToImage,
                        publishedAt: news.publishedAt
                    }))
                }
            }
            res.send(data);
        }
    });

})

/** 
 * @function
 * @name getEncodedQueryParamsURL 
 * @description Gets the api url and params then returns the formatted query string
 * @param {string} api  News Api url string
 * @param {object} queryObj contains all the query params as object
 * @return {string}  A query string
 * 
 * */
function getEncodedQueryParamsURL(api, queryObj) {
    let tempParams = new URLSearchParams(queryObj);
    return `${api}/top-headlines?${tempParams.toString()}`
}


module.exports = router