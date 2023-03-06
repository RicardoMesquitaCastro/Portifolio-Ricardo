const express = require('express');

const app = express();

const appName = 'portifolio';

const outputPath = `${__dirname}dist/${appName}`;

app.use(express.static(outputPath));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
})

app.listen(process.env.PORT);