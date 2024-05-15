import http from 'node:http'

const users = []

const server = http.createServer((req,res)=>{
    const {method,url} = req
    if(method === "GET" && url==="/users"){
        return res.end('Listagem de Palominha')

    }
    
    if(method === "POST" && url==="/users"){
        users.push({
            id:1,
            name:'Palomas',
            email:'papaapa@gmail.com'
        })
        return res.end('Criação de palomictha')
    }

    return res.end('Palominhaaa')
})

server.listen(2512)