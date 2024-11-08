var alldataRecibes1 =[]
var alldataRecibes2 =[]
var mmorbgbtn=document.getElementById("mmorpg")
var shooterbtn=document.getElementById("shooter")
var sailingbtn=document.getElementById("sailing")
var permadethbtn=document.getElementById("permadeath")
var superherobtn=document.getElementById("superhero")
var pixelbtn=document.getElementById("pixel")
var detailsPartition= document.getElementById("details")
var homePartition= document.getElementById("home")
var closeBtn=document.getElementById("btn-close")
var lodinng=document.querySelector(".loding-page")
console.log(alldataRecibes1);

getgames("mmorpg")

async function getgames(target1){
  lodinng.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ec1806cbe0msh6710ed0d0af7fb3p125ddejsne9da641cb9ca',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${target1}`,options)
let Data = await api.json()
lodinng.classList.add("d-none")

alldataRecibes1=Data
console.log(alldataRecibes1);

displayHome()

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click',()=>{
    homePartition.classList.add('d-none') 
  detailsPartition.classList.remove('d-none') 
  getgamesDetails(card.dataset.id)
  })
 
});

}




async function getgamesDetails(id){
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ec1806cbe0msh6710ed0d0af7fb3p125ddejsne9da641cb9ca',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
    
let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
let Data = await api.json()
alldataRecibes2=Data
// console.log(alldataRecibes2);
displayDetails()



}



function displayHome(){
 let dataReturn1=alldataRecibes1
// console.log(dataReturn1[0]);

 let cartona1=``
for (let i = 0; i < dataReturn1.length; i++) {
    cartona1 +=
   `
   <div class="col-md-3 p-3">
 <div >
              <div data-id="${dataReturn1[i].id}" class="card text-light p-4">
                <div class="img">
                  <img
                    class="w-100"
                    src="${dataReturn1[i].thumbnail}"
                    alt=""
                  />
                  <div class="layer"></div>
                </div>
                <br />
                <div class="d-flex justify-content-between align-items-center">
                  <h5>${dataReturn1[i].title}</h5>
                  <div class="sale-btn ps-2 pe-2 rounded-end-1 rounded-start-1">
                    free
                  </div>
                </div>
                <p class=" disc text-center p-3">
                  ${dataReturn1[i].short_description}
                </p>
                <div
                  class="card-footer p-2 d-flex justify-content-between align-items-center"
                >
                  <div class="left-footer rounded-end-1 rounded-start-1">
                    <p class="text-light">${dataReturn1[i].genre}</p>
                  </div>
                  <div
                    class="right-footer ps-1 pe-1 rounded-end-1 rounded-start-1"
                  >
                    <p class="text-light">${dataReturn1[i].platform}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
  ` 

// console.log(cartona1);
document.getElementById("cards").innerHTML=cartona1

}

}



function displayDetails(){
 let dataReturn2=alldataRecibes2
// console.log(dataReturn2);


   let cartona2 =
 `
  <div class="col-4">
              <img
                class="w-100"
                src="${dataReturn2.thumbnail}"
                alt=""
              />
            </div>
            <div class="col-8  ">
              <h3>Title:${dataReturn2.title}</h3>
              <h4>Category: <span class="rounded-end-1 rounded-start-1 bg-info pe-1 ps-1">${dataReturn2.genre}</span></h4>
              <h4>Platform: <span class="rounded-end-1 rounded-start-1 bg-info pe-1 ps-1"> ${dataReturn2.platform}</span></h4>
              <h4>Status: : <span class="rounded-end-1 rounded-start-1 bg-info pe-1 ps-1">${dataReturn2.publisher}</span></h4>
              <p class="lead">
              ${dataReturn2.short_description}
              </p>
              <br>
             <a href="${dataReturn2.game_url}"> <button class="btn btn-outline-warning p-2">SHOW GAME </button></a>
            </div>
` 

console.log(cartona2);
document.getElementById("detailsPartition").innerHTML=cartona2



}










closeBtn.addEventListener('click',()=>{
  detailsPartition.classList.add('d-none')  
  homePartition.classList.remove('d-none') 

})
mmorbgbtn.addEventListener("click",function(){
  var target1=mmorbgbtn.id
getgames(target1)
  
}) 
shooterbtn.addEventListener("click",function(){
  var target1=shooterbtn.id
  getgames(target1)

}) 
sailingbtn.addEventListener("click",function(){
  var target1=sailingbtn.id
  getgames(target1)

}) 
permadethbtn.addEventListener("click",function(){
  var target1=permadethbtn.id
  getgames(target1)

}) 
superherobtn.addEventListener("click",function(){
  var target1=superherobtn.id
  getgames(target1)

}) 
pixelbtn.addEventListener("click",function(){

  var target1=pixelbtn.id
  getgames(target1)

}) 




getgamesDetails()







/* 
var detailsbtn=document.getElementById("cards")

detailsbtn.addEventListener("click",function(e){
console.log();



homePartition.classList.add("d-none")
detailsPartition.classList.replace("d-none","d-flex")

}) */