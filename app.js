// let btnClick = document.querySelector(".fa-solid.fa-bars");
// let mobMenu = document.querySelector("#mobMenu")

// btnClick.addEventListener("click", ()=>{

//   if(mobMenu.style.display === "block"){
//     mobMenu.style.display = "none"
//   }else{
//     mobMenu.style.display ="block"
//   }
// // console.log(mobMenu);
// // console.log("Mr Tope clicked me");
// // mobMenu.style.backgroundColor='red'
// })


// let create= document.querySelector(".create")

// let newDiv = document.createElement("div")
// newDiv.className= "new-div"
// newDiv.innerHTML= `<h1>Mr Tope seems to confuse</h1>`
// create.appendChild(newDiv)

// // counterdown section

// const countDown=()=>{
//   let day = document.querySelector(".days h4")
//   let hours = document.querySelector(".hours h4")
//   let min = document.querySelector(".mins h4")
//   let seconds = document.querySelector(".seconds h4")

//   let currentDate = new Date()
//   // console.log(currentDate)
//   let presentdate = new Date("25 December 2022")

//   let millisecToXmax = presentdate - currentDate
//   let dayRem = Math.floor(millisecToXmax / 3600 / 24 / 1000)
//   let hoursRem = Math.floor(millisecToXmax / 3600 / 1000) % 24
//   let secRem = Math.floor(millisecToXmax / 1000) % 60
//   // let secRem = Math.floor(millisecToXmax / 3600)
//   // console.log(dayRem)
//   // console.log(hoursRem)
//   // console.log(secRem);

//   day.innerHTML = dayRem
//   hours.innerHTML = hoursRem
//   seconds.innerHTML = secRem
// }

// setInterval(countDown, 1000)



// let inputField = document.querySelector("input")
// let btnAdd = document.getElementById("btnAdd")
// let btnReset = document.getElementById("btnReset")
// let ul = document.getElementById("todo-items-ul")

// function AddTodo(e){
//   e.preventDefualt();
//   inputField = inputField.value

  
//  // console.log("add todo is working")

//  let listitems = document.createElement("li")
// }
// btnAdd.addEventListener("click", )

$(document).ready(()=>{

  $("div.goat").css("color")
  $(".ali2").css("color", "green")
  $(".ali2").text("ali goes")
  $(".ali2").css("font-size" , "50px")

  //$(".ali2").css("color", "green").text("ali goes").css("font-size", "50px")

  $("#div5").addClass("div")
  $("#div5").removeClass("fo")



  $(".clickMe").click(()=> {
    $(".ali2").css("text-transform", "uppercase")
  })

  $(".clickMe2").on("mouseover,"()=>)
  $(".all4").toggleClass("all3")



})