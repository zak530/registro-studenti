const express = require('express');
const webserverapp = express()
const port = 3000

webserverapp.get('/', (req, res) => {
 

  //analizza la req
  //fa cose belle
  console.log("arrivata la richiesta, la stampo")
  console.log(req.rawHeaders[13])
  //restituisce una risposta
   res.send('sei su un OS: ' + req.rawHeaders[13])
})

webserverapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})