import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://fake-tinder-app.herokuapp.com' 
    : 'http://localhost:3333'
})

export default Api