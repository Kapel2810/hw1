
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
let pBoxElement = document.getElementById('p-box')
let inputElement = document.getElementById('input')
let inputName = inputElement.value

const addName = () => {
    console.log('Katrina')

}
const showName = (callback) => {
    callback()
}
showName(addName)