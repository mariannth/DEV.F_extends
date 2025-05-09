// const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log('La promesa ya tiene respuesta')
//     });

//console.log(fetchResult);

// const todosArray = [];

// for(let i=1; i<=50; i++){
//     fetch('https://jsonplaceholder.typicode.com/todos/${i}')
//     .then(response => response.json())
//     .then((data) => todosArray.push(data))
//     .then((err) => console.log(err))
//     .finally(() => {
//         printTodos(todosArray);
//     });
// }
// todosArray.forEach((todo) => {
//     console.log(todo.title);
// });


axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => console.log(response.data))
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });