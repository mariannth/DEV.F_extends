// const resolveAfter = () => {
//     return new Promise((resolve, reject) =>{
//         let valor = true;
//         setTimeout(() => {
//             if(valor){
//                 return resolve("Resuelto")
//             }else{
//                 return reject("Rechazado")
//             }
//         }, 2000)
//     })
// }

// const resolveAfter = () => {
//     return new Promise((resolve, reject) => {
//         let valor = true;
//         setTimeout(() => {
//             return (valor) ? resolve("Resuelto") : reject("Rechazado");
//         }, 2000)
//     })
// }

// const asyncCall = async() =>{
//     console.log("Llamanndo a la función");
//     const result = await resolveAfter();
//     console.log(result);
// }

// asyncCall();

const resolveAfter = () => {
    return new Promise((resolve, reject) => {
        let valor = true;
        setTimeout(() => {
            return valor ? resolve([1, 2, 3]) : reject("Rechazado");
        }, 6000);
    });
};

const asyncCall = async () => {
    try {
        console.log("Llamando a la función");
        const result = await resolveAfter();
        return result;
    } catch (error) {
        console.error(error);
        return new Promise((resolve, reject) => reject("La petición no pasó :("));
    }
};

const numbers = asyncCall();

numbers
.then((value) => console.log(value))
.catch((err) => console.log(err));


const apiCall = async(url, property=null) =>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(property){
            console.log(data[property]);
        }else{
            
        }
        console.log(data.results);
    }catch (error) {
        console.error(error);   
    }
}

apiCall("https://rickandmortyapi.com/api/character");