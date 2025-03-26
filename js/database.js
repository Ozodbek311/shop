let  users =JSON.parse(window.localStorage.getItem("users")) || [
    {id:1,name:"Ali",contact:"+998911234567"},
    {id:2,name:"Vali",contact:"+998917778797"},
    {id:3,name:"Alisher",contact:"+998911093050"}
]

let foods = JSON.parse(window.localStorage.getItem("foods")) || [
    {id:1,name:"Combo",imgSrc:"./img/combo.jpeg"},
    {id:2,name:"Fanta",imgSrc:"./img/fanta.jpeg"},
    {id:3,name:"Cola",imgSrc:"./img/cola.jpeg"},
    {id:4,name:"Spinner",imgSrc:"./img/spinner.jpeg"},
    {id:5,name:"Chicken-togora",imgSrc:"./img/chicken_togora.jpeg"},
    {id:6,name:"Chicken-wings",imgSrc:"./img/chicken_wings.jpeg"},
    {id:7,name:"Burger",imgSrc:"./img/burger_cheese.jpeg"}
]


let orders = JSON.parse(window.localStorage.getItem("orders")) || [
    {userId:1,foodId:5,count:2},
    {userId:2,foodId:3,count:1},
    {userId:3,foodId:6,count:4},
    {userId:2,foodId:7,count:3},
    {userId:3,foodId:1,count:1},
    {userId:1,foodId:4,count:5},
]
let chosenUser=JSON.parse(window.localStorage.getItem("chosen"))||null