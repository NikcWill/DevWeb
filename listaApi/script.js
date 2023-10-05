// let container = document.querySelector('.container')

// async function getTodo(){
//     let request = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let data = await request.json()

//     data.forEach((todo) => {
//         console.log(todo.title);
//         container.innerHTML += `
//         <p>${todo.title}</p>`
        
//     });
//     console.log(data);
// }
// getTodo()


const app = Vue.createApp({
    data(){
        return{
            nome:'Hello Vue!!!',
            todos: []
        }   
    },

    methods:{
        async getTodo(){
             let request = await fetch('https://jsonplaceholder.typicode.com/todos')
             let data = await request.json()
             this.todos = data
            }
    },
    mounted(){
        this.getTodo()

    }

})


app.mount('#app')