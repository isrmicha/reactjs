var compression = require('compression')
const express = require('express')
const app = express()
app.use(compression())
app.use(express.static('build'))

app.listen(process.env.PORT || 80);
console.log(`Server rodando em ${process.env.PORT || 80}`);