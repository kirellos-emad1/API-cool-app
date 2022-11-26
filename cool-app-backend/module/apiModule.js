import fetch from 'node-fetch';
import { connect, Schema, model } from 'mongoose';

// add your local mongoDB connection here 
connect('mongodb://localhost:27017/APP')

const apiSchema = new Schema({

    API:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Link:{
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    }
})

let x = true
const Api = model('API' , apiSchema)

async function getTheApi() {
    const res = await fetch('https://api.publicapis.org/entries')
    const data = await res.json()
    const entriesData = data.entries
    for (let i = 0; i < entriesData.length; i++) {
        const apiData = new Api ({
            API: entriesData[i]['API'],
            Link: entriesData[i]['Link'],
            Category: entriesData[i]['Category'],
            Description: entriesData[i]['Description']
            })
        apiData.save()
    }
}

getTheApi()

export default Api