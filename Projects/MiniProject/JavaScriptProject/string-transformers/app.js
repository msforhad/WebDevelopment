let userInput = document.getElementById('userInput')
let lowerCase = document.getElementById('lower-case')
const upperCase = document.getElementById('upper-case')
const camelCase = document.getElementById('camel-case')
const pascalCase = document.getElementById('pascal-case')
const snakeCase = document.getElementById('snake-case')
const kebabCase = document.getElementById('kebab-case')
const trim = document.getElementById('trim')


function uppercase(str){
    return str[0].toUpperCase()+str.slice(1,str.length)
}
// ------------Camel-case-function------
function camelcase(fullText){
    var lowerCase = fullText.toLowerCase()
    var fullTextArray = lowerCase.split(' ')
    var finalCamelCase = fullTextArray.map((word, i)=>{
        if(i === 0) return word
        return uppercase(word)
    })
    return finalCamelCase.join('');
}
// ------pascalCase------------
function pascalcase(fullText){
    var lowerCase = fullText.toLowerCase()
    var fullTextArray = lowerCase.split(' ')
    var finalPascalCase = fullTextArray.map((word)=>{
        return uppercase(word)
    })
    return finalPascalCase.join('')
}
// ---------Snake-case-----------
function snakecase(fullText){
    var fullTextArray = fullText.split(' ')
    return fullTextArray.join('_')
}
// ---------kebab-case---------
function kebabcase(fullText){
    var fullTextArray = fullText.split(' ')
    return fullTextArray.join('-')
}
// ------trim--------
function Trim(fullText){
    var fullTextArray = fullText.split(' ')
    return fullTextArray.join('')
}

function updatedScreen(){
    lowerCase.innerText = userInput.value.toLowerCase();
    upperCase.innerText = userInput.value.toUpperCase();
    camelCase.innerText = camelcase(userInput.value);
    
    pascalCase.innerText = pascalcase(userInput.value);
    snakeCase.innerText = snakecase(userInput.value);
    kebabCase.innerText = kebabcase(userInput.value);
    trim.innerText = Trim(userInput.value);

}
updatedScreen()
userInput.addEventListener('input',updatedScreen)


