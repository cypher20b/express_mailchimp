const express = require('express')
require('dotenv').config({ path: `${__dirname}/.env` })
const app = express()
var cors = require('cors')
const mailchimp = require("@mailchimp/mailchimp_marketing");
var bodyParser = require('body-parser')
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// setting-up mailchip 
mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: process.env.SERVER_PREFIX,
  });
  
  async function run() {
    return response = await mailchimp.ping.get();
  }
// end of mailchimp set-up

app.get('/',(req, res)=>{
    res.json('app is running perfectly fine')
})

app.get('/test', async (req,res)=>{
    const test_result = await run()
    console.log(test_result)
    res.json(test_result)
})

app.listen(port, () => {
    console.log(`mailchimp API is listening on port ${port}`)
})