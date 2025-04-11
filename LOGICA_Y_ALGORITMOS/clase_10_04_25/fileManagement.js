const fs = require("fs");

fs.appendFile(
    "miArchivo.txt",
    "Este es mi primer archivo creado con Node.js",
    function(err){
        if(err){
            throw err;
        }
        console.log("Guardado!1");
    }
);

fs.open('miArchivo2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Guardado!2');
});

fs.writeFile('miArchivo.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Guardado!3');
});

fs.appendFile(
    "miArchivo.txt",
    "\nEsta linea ha sido añadida",
    function(err){
        if(err){
            throw err;
        }
        console.log("Guardado!4");
    }
);

fs.unlink('miArchivo2.txt', function (err) {
    if (err){
        throw err
    } 
    console.log('File deleted!');
});

const miJson = {
    dia: 10,
    mes: 4,
    ano: 2025
}

const convertedJSON = JSON.stringify(miJson);
console.log(convertedJSON);

fs.truncate('JSONData.txt', 0, function(){console.log('done')})

fs.appendFile(
    "JSONData.txt",
    convertedJSON,
    function(err){
        if(err){
            throw err;
        }
        console.log("JSON Guardado!");
    }
);



fs.readFile(
    "JSONData.txt",
    function(err, data){
        if(err){
            throw err
        }
        let jsonData = data.toString();
        console.log(JSON.parse(jsonData));
    }
)


