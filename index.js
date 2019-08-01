const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3001;

/*Tratando aplicação suportar requisições...*/
app.get('/', (req, res) => {
    res.send('Working...');
}); 

const rotas = require('./rotas');
app.use('/api', rotas);

/*Back-end reconhecendo diretorio client como parte front do projeto */
app.use(express.static(__dirname + '/client'));

app.listen(port, ()=> {
    console.log("Server running on http://localhost: ", port);
});