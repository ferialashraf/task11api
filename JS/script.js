
let searchinput = document.getElementById('searhinput');

let recipes =[];
getmeals("pizza")

function getmeals(meals){
   let myhttp = new XMLHttpRequest()
myhttp.open('get', ` https://forkify-api.herokuapp.com/api/search?q=${meals}`)

myhttp.send()
myhttp.responseType = 'json';
myhttp.addEventListener ('load' ,function(){
   if( myhttp.status>=200&&myhttp.status<300){
      document.querySelector('.alert-danger').classList.add('d-none')
      recipes =myhttp.response.recipes;
      displaydata()
      console.log(myhttp.response.recipes);
   }
   else{
      let msgerror = myhttp.response
      
   document.querySelector('.alert-danger').innerHTML=msgerror.error
   document.querySelector('.alert-danger').classList.remove('d-none')
     
   }
      
})

}


function displaydata (){
   let box= ''

   for( let i = 0 ;i<recipes.length ; i++){
      box +=`
       <div class="col-md-3">
          <div class="inner shadow rounded-4">
            <img class = " w-100" src=" ${recipes[i].image_url}" alt="">
               <h3 class ="p-3"> ${recipes[i].title.split(' ' ,2) .join ( ' ')} </h3>
          </div>
        </div>
      
      
      `
   }

   document.getElementById('myrow').innerHTML=box

}

searchinput.addEventListener('input' ,function(){
   console.log(searchinput.value);
   getmeals(searchinput.value)
   
})