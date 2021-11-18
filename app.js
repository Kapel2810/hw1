

let inputElement = document.getElementById('input')

pBoxElement= document.getElementById("p-box")

const addCode = () => {
    
        let code = inputElement.value
    try {
       if(isNaN(code))
           throw 'רק מספרים מותרים'
           code = Number(code)
    } catch (error){
                pBoxElement.innerHTML = error
                console.log('error')
    }

}
