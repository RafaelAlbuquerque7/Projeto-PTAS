var express = require("express");
var app = express();
var {usuario} = require("./models"); 

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))



app.get("/", async function(req,res){
  var resultado = await usuario.findAll();
  res.json(resultado); 
});

app.post("/", function(req,res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req,res){
  const id = await usuario.findByPk(req.params.id);
res.json(id.nome="Rafael");
  const resultadoSave = await id.save();
console.log(resultadoSave);
});

app.delete("/:id", async function(req,res ){
var resultado = usuario.destroy({ where: { id: req.params.id }});
console.log(resultado);
  res.json(resultado)
});


app.listen(3000, function(){
  console.log("O servidor está positivo e operante")
})



//nos temeos tres formas de pegar a url, 
// http://luizpicolo.com.br/inserir?id=123 req.query.id
// http://luizpicolo.com.br/inserir/123 req.params.id
// http://luizpicolo.com.br/inserir req.body.id