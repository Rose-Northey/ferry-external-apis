import express from 'express'
import request from 'superagent'
import { FerryOperator } from '../../models/ferrys.ts' 
import * as dotenv from 'dotenv'
dotenv.config()

// to access the key variable


const router = express.Router()

// GET http://localhost:5173//api/v1/ferryData/
router.get('/', (req, res) => {
    const apiKey = process.env.NZTA_KEY_RN
    console.log('this is working')
    request
    .get(`https://api.at.govt.nz/realtime/legacy/ferrypositions`)
    .set('Ocp-Apim-Subscription-Key', `${apiKey}`)
    .then((response) => {return res.json(response.body.response)})
    .catch((err) => console.log('API error: ', err.message))
})
export default router