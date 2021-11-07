import http from "http";

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain")
    res.end("This is responce from server")
})
const PORT = process.env.POST || 8080;
const HOST = process.env.HOST || "localhost";

server.listen(PORT,HOST,()=>{
    console.log(`Server is started on http://${HOST}:${PORT}`)
})
