import fs from 'fs'

fs.readFile('jsonFile.json', 'utf-8', (err, data)=>{
    let a = JSON.parse(data)
    console.log(a.products[0].title);

})
