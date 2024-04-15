// task1
const nameInput = document.getElementById('nameInput')
const nameSubmitBtn = document.getElementById('nameSubmitBtn')



function saveData(){
    let userName = nameInput.value
    const saveDataLS = localStorage.setItem('userKey', userName)
    alert(`Привет, ${userName}!`)   
}
nameSubmitBtn.addEventListener('click', saveData)



let getLS = localStorage.getItem('userKey')

if (getLS){
        alert(`Привет, ${getLS}!`)
    }else{
        alert('Привет, гость! Введите свое имя')
         }



// task2
const counterBtn = document.getElementById('counterBtn');
const counterText = document.getElementById('counterText');


let keyLS = localStorage.getItem('key');

counterBtn.addEventListener('click', function(){
    keyLS++
    localStorage.setItem('key', keyLS)
    counterText.innerText = keyLS
})














































// // task3
// const productsAddBtn = document.getElementById('productsAddBtn')
// const enterProductInput = document.getElementById('enterProductInput')
// const listOfProducts = document.getElementById('listOfProducts')


// productsAddBtn.addEventListener('click', function(){
//     let listText = listOfProducts.innerText = enterProductInput.value
//     let saveProductList = localStorage.setItem('key', `${listText}`)
//     console.log(typeof(listText));//strin
//     listOfProducts.appenChild(listOfProducts)
//     let getProduct = localStorage.getItem('key')
// })  



    
       