import * as fs from "fs"

fs.mkdir("./test",error=>{
    if (error) throw error;
    console.log("Folder Created....")  
})
fs.mkdir("./create/multiple/folders/with/one/statement",{recursive:true},error=>{
    if (error) throw error;
    console.log("Folders Created....")  
})
fs.readdir("./test",(error,files)=>{
    if (error) throw error;
    files.map(file=>console.log(file))
})

fs.writeFile("file.txt","This string will be witten in file.txt file",(error)=>{
    if (error) throw error;
})
fs.readFile("file.txt","utf-8",(error,data)=>{
    if (error) throw error;
    console.log(data)
})


fs.appendFile("file.txt","\nThis string will append in file.txt",(error)=>{
    if (error) throw error;
})



fs.copyFile("file.txt","newFile.txt",(error)=>{
    if (error) throw error;
})
fs.stat("file.txt",(error,data)=>{
    if (error) throw error;
    console.log(data)
})
