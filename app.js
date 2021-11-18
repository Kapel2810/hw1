
// ------ ex 1------
// let inputElement = document.getElementById('input')

// pBoxElement= document.getElementById("p-box")

// const addCode = () => {

//         let code = inputElement.value
//     try {
//        if(isNaN(code))
//            throw 'רק מספרים מותרים'
//            code = Number(code)
//     } catch (error){
//                 pBoxElement.innerHTML = error
//                 console.log('error')
//     }
// }

// ------ ex 2 ----
// let pBoxElement = document.getElementById('p-box')

// const addName = () => {
//     console.log('Katrina')


// }
// const showName = (callback) => {
//     callback()
// }
// showName(addName)


// ----- ex 3 ------
// let divElement = document.getElementById('div-el')
// let randomNumber = Math.floor(Math.random() * 100)

// const getRandomNumber = () => {
//     cool(showNumber)
// }

// const showNumber = () => {
//     divElement.innerHTML = randomNumber
// }
// const cool = (callback) => {
//     callback()
// }

// ------ ex4 ----- 

// let divElement =document.getElementById('div-el')


// const getNumber = () => {
//  nice (showNumber)
// }
// const showNumber =()=> {
//     divElement.innerHTML = 42
// }
// const nice = (callback) => {
//     callback()
// }

//----- ex 5 ------

// let divElement = document.getElementById('div-el')

// let numbersList = [42, 128, 37, 81, 66]
// let number = Math.floor (Math.random() * numbersList.length)

// const getRandomNumberFromArray = () => {
//     amazing(showNumber)
// }

// const showNumber = () => {
//     document.write ( ' Number ' + number)
// }
//  const amazing =(callback) => {
//      callback()
//  }

// ------ ex6----- 

// let bodyElement = document.getElementById('body-box')
// let color = '#'+Math.floor(Math.random()*16777215).toString(16)

// const getRandomColor =() => {
//  cool (showRandomColor)
// }

// const showRandomColor = () => {
//     bodyElement.style.background = color
// }

// const cool = (paintCallback) =>{
//     paintCallback()
// }

// ------ ex 7-----

// let bodyElement = document.getElementById('body-box')

// const colorPage =() => {
//     nice(getColor)
// }

// const getColor =() => {
//     bodyElement.style.backgroundColor = "green"
// }

// const nice = (paintCallback) => {
//     paintCallback()
// }

//-----ex 8---- 

let bodyElement = document.getElementById('body-box')

let colorsList = ['red', 'green', 'blue']
//  let color = Math.floor(Math.random() * colorsList.length)

const getRandomPageColorFromArray = () => {
    amazing(showPageColor)
}

const showPageColor = () => {

    bodyElement.style.backgroundColor = colorsList[Math.floor(Math.random() * colorsList.length)]
    bodyElement.innerText = "Painted Color: " + color
}

const amazing = (paintCallback) => {
    paintCallback()

}
