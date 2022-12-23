
// let list=document.querySelector("#list")
// let data=fetch("https://jsonplaceholder.typicode.com/posts")
// .then(respons=>respons.json())
// .then(data1=>{
//     data1.forEach(element => {
//      //   console.log(element.id)
// if (element.id<=10) {
//     list.innerHTML+=`<li>${element.title} </li>`  // ilk 10 elemani boylece aldik
// }

     
        
//     });
// })

let list=document.querySelector("#photo")
let data=fetch("https://jsonplaceholder.typicode.com/photos")
.then(respons=>respons.json())
.then(data1=>{
    data1.forEach(element => {
     //   console.log(element.id)
if (element.id<=10) {
    list.innerHTML+=`<img src ="${element.url}"/> `  // ilk 10 elemani boylece aldik
}

     
        
    });
})
