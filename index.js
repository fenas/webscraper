
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

// const url = 'https://www.theguardian.com/uk'


const url ='https://metro.co.uk/sport/football/'
app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            // console.log(html)
            const $ = cheerio.load(html)
            const articles = []

            $('.metro__post', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.metro__post__title__decoration').text()
                const url = $(this).find('a').attr('href')
                const img = $(this).find('.metro__post__media').find('img').attr('src');
                const subtitle = $(this).find('.metro__post__meta').text();


                articles.push({
                    title,
                    url,
                    img,
                    subtitle
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

