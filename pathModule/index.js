const path = require("path")



console.log(path.basename(__filename))


console.log(path.join("path","to","file.html"))

const newFilePath = path.join(__dirname,"file.html")
console.log(newFilePath)

console.log(path.dirname(newFilePath))

console.log(path.extname(newFilePath))


console.log(path.normalize("normalize\\\\invalid\\\\\\path"))
console.log(path.normalize("normalize\\////\\invalid\\\\////\\path"))

console.log(path.win32.normalize("normalize\\////\\invalid\\\\////\\path"))


console.log(path.parse(__filename))


console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute("."))
console.log(path.isAbsolute("foo/path"))
console.log(path.isAbsolute("c:/foo/path"))

