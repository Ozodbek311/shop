let userAdd=document.querySelector("#userAdd")
let customersList=document.querySelector(".customers-list")
let ordersList=document.querySelector(".orders-list")
let foodsForm =document.querySelector("#foodsForm")
let foodsSelect=document.querySelector("#foodsSelect")
let foodsCount=document.querySelector("#foodsCount")

function showUsers(){
      customersList.innerHTML=""
      for(let user of users){
            customersList.innerHTML+=`
            <li class="customer-item" onclick="showOrders(${user.id})">
			<span class="customer-name">${user.name}</span>
			<a class="customer-phone" href="tel:${user.contact}">${user.contact}</a>
		</li>`
      }
}

function showFoods(){
      foodsSelect.innerHTML=""
      for(let i of foods){
            foodsSelect.innerHTML+=`<option value="${i.id}">${i.name}</option>`
      }
}

function showOrders(userId){
      ordersList.innerHTML=""
      let ordered=orders.filter((el)=>el.userId==userId)
      
      for(let i of ordered){
            let orderedfood=foods.filter((el)=>el.id==i.foodId)
            
            ordersList.innerHTML+=`
                                    <li class="order-item">
                                          <img src="${orderedfood[0].imgSrc}">
                                          <div>
                                                <span class="order-name">${orderedfood[0].name}</span>
                                                <span class="order-count">${i.count}</span>
                                          </div>
                                    </li>`
      }
      let clientId=document.querySelector("#clientId")
      let userHeader=document.querySelector("#userHeader")
      let name = users.filter((el)=> el.id==userId)
      clientId.innerHTML=userId
      userHeader.innerHTML=name[0].name
      chosenUser=userId
      window.localStorage.setItem("chosen",JSON.stringify(chosenUser))
}

function takeOrder(event){
      let foodsSelect=document.querySelector("#foodsSelect")
      let foodsCount=document.querySelector("#foodsCount")
      event.preventDefault()
      if(chosenUser==null){
            return alert("User tanlanmagan")
      }
      let ordered=orders.filter((el)=>el.userId==chosenUser)
      let ishlash =true
      ordered.forEach((el)=>{
            if(el.foodId==Number(foodsSelect.value)){
                  el.count+=Number(foodsCount.value)
                  ishlash=false
            }
      })
      
      
      
      if(ishlash){
            orders.push({userId:chosenUser,foodId:Number(foodsSelect.value),count:Number(foodsCount.value)})
      }
      window.localStorage.setItem("orders",JSON.stringify(orders))
      showOrders(chosenUser)
      
}
foodsForm.addEventListener("submit",takeOrder)

function addUser(event){
      event.preventDefault();
      let inputUser=document.querySelector("#usernameInput")
      let inputContact=document.querySelector("#telephoneInput")
      if(inputUser.value.trim()=="") return alert("Ism yoq")
      for(let i=0;i<inputUser.value.length;i++){
            if(inputUser.value[i].charCodeAt()>=48 && inputUser.value[i].charCodeAt()<=57){
                  return alert("Ismda raqam bor")
            }
      }
      if(/^998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/.test(inputContact.value)) return alert("Telefon nomer noto'g'ri")
      let pushId = users.length==0  ? 1 :users[users.length-1].id+1
      users.push({id:pushId,name:inputUser.value,contact:inputContact.value})

      //local stroge bilan ishlash
      window.localStorage.setItem("users",JSON.stringify(users))
      
      inputUser.value=""
      inputContact.value=""
      
      
      showUsers()
}

userAdd.addEventListener("submit",addUser)



showUsers()
showFoods()

if(chosenUser!=null){
      showOrders(chosenUser)
}
