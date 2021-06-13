const express = require('express');
const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors');
 app.use(cors());

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Hello World!");
     }
 ); 

 app.get('/', function (req, res){
        res.send("Hello denovo!");
 });

const curiosidades = [
    {tipo: "Tocantins é o Estado mais novo do Brasil", detalhe:"Até 30 anos atrás Tocantins não existia, bem como fazia parte do Estado de Goiás, portanto, criado juntamente a constituição de 1988."},
    {tipo: "Maior comunidade Japonesa fora do Japão", detalhe:"Uma das mais interessantes curiosidades sobre o Brasil é que o nosso país abriga a maior comunidade japonesa fora do Japão. Assim como só em São Paulo, moram mais de 600 mil japoneses."},
    {tipo: "Línguas faladas no Brasil", detalhe:"Antes do descobrimento do Brasil, as línguas faladas giravam em torno de mil. Porém atualmente, por mais que o Português seja a língua oficial, cerca de 180 ainda sobrevivem, porém apenas 11 são faladas por pouco mais de 5 mil pessoas."},
    {tipo: "Porta aviões da Marinha vendido no eBay", detalhe:"um porta aviões da Marinha, chamado Minas Gerais, já foi colocado a venda no famoso eBay, contudo o mesmo foi removido"},
]

app.get('/curiosidades', function(req, res){
        //res.send(mensagens);
        res.send(curiosidades.filter(Boolean));
    } 
);
app.get('/curiosidades/:id', function(req, res){
        const id = req.params.id - 1;
        const curiosidade = curiosidades[id];

        if (!curiosidade){
            res.send("Curiosidade não encontrada!");
        } else {
            res.send(curiosidade);
        }
    }
);

app.post('/curiosidades', 
    (req, res) => {
        console.log(req.body.curiosidade);
        const curiosidade = req.body.curiosidade;
        festas.push(curiosidade);
        res.send("Curiosidade adicionada!")
    }
);

app.put('/curiosidades/:id',
    (req, res) => {
        const id = req.params.id - 1;
        console.log(req.body.curiosidade);
        const curiosidade = req.body.curiosidade;
        festas[id] = curiosidade;        
        res.send("Curiosidade atualizada!")
    }
);

app.delete('/curiosidades/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete curiosidades[id];
        res.send("Curiosidade removida!");
    }
);