import { URL } from "url";

const myUrl = new URL("https://www.mywebsite.com:8080/p/a/t/h?query=string#hash")


console.log(myUrl.hash,'   ----- hash')

console.log(myUrl.host,'   ----- host')

console.log(myUrl.hostname,'   ----- host name')

console.log(myUrl.port,'   ----- PORT')

console.log(myUrl.href,'   ----- href')

console.log(myUrl.pathname,'   ----- Path Name')

console.log(myUrl.searchParams,'   ----- Search params')

console.log(myUrl.origin,'   ----- origin')

console.log(myUrl.protocol,'   ----- protocol')

console.log(myUrl.password,'   ----- password')

console.log(myUrl.search,'   ----- seach')

console.log(myUrl.toJSON(),'   ----- toJSON')

console.log(myUrl.toString(),'   ----- toString')

