const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')//coloca id unico

const app = express()
app.use(express.json())
const Cinema_Shopping_Bangu = [{
    "id": 1,
            "Filme": "ADÃO NEGRO",
            "sinopse": "Dotado dos poderes onipotentes dos deuses, Teth Adam está preso por 5.000 anos, passando de homem, mito, lenda: Adão Negro. Agora livre, um vingativo Adão Negro exerce seu senso único de justiça, nascido da raiva, mais uma vez. Recusando-se a se render, o anti-herói que passou de homem, mito e lenda, é desafiado pelos heróis modernos da Sociedade da Justiça: Gavião Negro, Sr. Destino, Esgama Átomo e Cyclone.",
            "genero": "Ação / Aventura",
            "duracao": "125 minutos",
            "categoria_id": 1
}
];
const Cinema_Shopping_Sulacap = []
const Cinema_Shopping_Guadalupe = []
const Cinema_Shopping_Via_Brasil = []

//-----------------------------------------VISUALIZAR----------------------------------------------------
app.get('/Cinema_Shopping_Bangu', (request, response) =>{
    return response.json(Cinema_Shopping_Bangu)
})
app.get('/Cinema_Shopping_Sulacap', (request, response) =>{
    return response.json(Cinema_Shopping_Sulacap)
})
app.get('/Cinema_Shopping_Guadalupe', (request, response) =>{
    return response.json(Cinema_Shopping_Guadalupe)
})
app.get('/Cinema_Shopping_Via_Brasil', (request, response) =>{
    return response.json(Cinema_Shopping_Via_Brasil)
})

//------------------------------------------INSERIR------------------------------------------------------
app.post('/Cinema_Shopping_Bangu', (request, response) => {
    const {filme, sinopse, genero, duracao} = request.body
    const cinebangu = {id: uuid(), filme, sinopse, genero, duracao}
    Cinema_Shopping_Bangu.push(cinebangu)
    return response.status(201).json(cinebangu)
})
app.post('/Cinema_Shopping_Sulacap', (request, response) => {
    const {filme, sinopse, genero, duracao} = request.body
    const cinesulacap = {id: uuid(), filme, sinopse, genero, duracao}
    Cinema_Shopping_Sulacap.push(cinesulacap)
    return response.status(201).json(cinesulacap)
})
app.post('/Cinema_Shopping_Guadalupe', (request, response) => {
    const {filme, sinopse, genero, duracao} = request.body
    const cineguadalupe = {id: uuid(), filme, sinopse, genero, duracao}
    Cinema_Shopping_Guadalupe.push(cineguadalupe)
    return response.status(201).json(cineguadalupe)
})
app.post('/Cinema_Shopping_Via_Brasil', (request, response) => {
    const {filme, sinopse, genero, duracao} = request.body
    const cineviabrasil = {id: uuid(), filme, sinopse, genero, duracao}
    Cinema_Shopping_Via_Brasil.push(cineviabrasil)
    return response.status(201).json(cineviabrasil)
})

//--------------------------------------------ATUALIZAR------------------------------------------------
app.put('/Cinema_Shopping_Bangu/:id', (request, response) => {
    const { id } = request.params
    const { filme, sinopse, genero, duracao } = request.body
    const newCinema_Shopping_Bangu= { id, filme, sinopse, genero, duracao }
    const cinebanguindex = Cinema_Shopping_Bangu.findIndex(cinebangu => cinebangu.id == id)
    Cinema_Shopping_Bangu[cinebanguindex] = newCinema_Shopping_Bangu;
    return response.json(newCinema_Shopping_Bangu)
})
app.put('/Cinema_Shopping_Sulacap/:id', (request, response) => {
    const { id } = request.params
    const { filme, sinopse, genero, duracao } = request.body
    const newCinema_Shopping_Sulacap= { id, filme, sinopse, genero, duracao }
    const cinesulacapindex = Cinema_Shopping_Sulacap.findIndex(cinesulacap => cinesulacap.id == id)
    Cinema_Shopping_Sulacap[cinesulacapindex] = newCinema_Shopping_Sulacap;
    return response.json(newCinema_Shopping_Sulacap)
})
app.put('/Cinema_Shopping_Guadalupe/:id', (request, response) => {
    const { id } = request.params
    const { filme, sinopse, genero, duracao } = request.body
    const newCinema_Shopping_Guadalupe= { id, filme, sinopse, genero, duracao }
    const cineguadalupeindex = Cinema_Shopping_Guadalupe.findIndex(cineguadalupe => cineguadalupe.id == id)
    Cinema_Shopping_Guadalupe[cineguadalupeindex] = newCinema_Shopping_Guadalupe;
    return response.json(newCinema_Shopping_Guadalupe)
})
app.put('/Cinema_Shopping_Via_Brasil/:id', (request, response) => {
    const { id } = request.params
    const { filme, sinopse, genero, duracao } = request.body
    const newCinema_Shopping_Via_Brasil= { id, filme, sinopse, genero, duracao }
    const cineviabrasilindex = Cinema_Shopping_Via_Brasil.findIndex(cineviabrasil => cineviabrasil.id == id)
    Cinema_Shopping_Via_brasil[cineviabrasilindex] = newCinema_Shopping_Via_Brasil;
    return response.json(newCinema_Shopping_Via_Brasil)
})

//-------------------------------------------APAGAR------------------------------------------------------
app.delete('/Cinema_Shopping_Bangu/:id', (request, response) => {
    const { id } = request.params
    const cinebanguindex = Cinema_Shopping_Bangu.findIndex(cinebangu => cinebangu.id == id)
    Cinema_Shopping_Bangu.splice(cinebanguindex, 1)
    return response.status(204).send()
})
app.delete('/Cinema_Shopping_Sulacap/:id', (request, response) => {
    const { id } = request.params
    const cinesulacapindex = Cinema_Shopping_Sulacap.findIndex(cinesulacap => cinesulacap.id == id)
    Cinema_Shopping_Sulacap.splice(cinesulacapindex, 1)
    return response.status(204).send()
})
app.delete('/Cinema_Shopping_Guadalupe/:id', (request, response) => {
    const { id } = request.params
    const cineguadalupeindex = Cinema_Shopping_Guadalupeu.findIndex(cineguadalupe => cineguadalupe.id == id)
    Cinema_Shopping_Guadalupe.splice(cineguadalupeindex, 1)
    return response.status(204).send()
})
app.delete('/Cinema_Shopping_Via_Brasil/:id', (request, response) => {
    const { id } = request.params
    const cineviabrasilindex = Cinema_Shopping_Via_Brasil.findIndex(cineviabrasil => cineviabrasil.id == id)
    Cinema_Shopping_Via_Brasil.splice(cineviabrasilindex, 1)
    return response.status(204).send()
})

app.listen(8181, () =>{
    console.log('O servidor foi iniciado!')
})