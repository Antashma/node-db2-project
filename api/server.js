const express = require('express');
const server = express();
const db = require('../db-config.js')
server.use(express.json());

server.get('', (req, res) => {
    res.send(`
        <h1>Welcome to Sam's Node DB2 Project</h1>
        <p>Please use postman to interact with the dealer database.</p>
    `)
})

//READ - shows all car available from dealership
server.get('/api/cars', async (req, res) => {
    try {
        const allCars = await db('cars');
        res.status(200).json(allCars)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: `There was an error retrieving cars data.`,
            error,
        })
    }
    
})

//CREATE - posts new car to dealership
server.post('/api/cars', async (req, res) => {
    const body = req.body;
    try {
        const newCar = await db('cars').insert({...body});
        res.status(200).json(newCar)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: `There was an error inserting that car into the database.`,
            error,
        })
    }
})



module.exports = server;