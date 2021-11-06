import * as fs from "fs/promises"

try {
    await fs.mkdir("./test");
    console.log("Folder Created....");
} catch (error) {
    console.log(error)
}
try {
    await fs.mkdir("./create/multiple/folders/with/one/statement",{recursive:true});
    console.log("Folders Created....");
} catch (error) {
    console.log(error)
}
try {
    const files = await fs.readdir("./test");
    files.map(file=>console.log(file))
} catch (error) {
    console.log(error)
}
try {
    await fs.writeFile("file.txt","This string will be witten in file.txt file")
} catch (error) {
    console.log(error)
}

try {
    const data = await fs.readFile("file.txt","utf-8")
    console.log(data)
} catch (error) {
    console.log(error)
}

try {
    await fs.appendFile("file.txt","\nThis string will append in file.txt")
} catch (error) {
    console.log(error)
}

try {
    await fs.copyFile("file.txt","newFile.txt")
} catch (error) {
    console.log(error)
}

try {
    const fileInfo = await fs.stat("file.txt")
    console.log(fileInfo)
} catch (error) {
    console.log(error)
}