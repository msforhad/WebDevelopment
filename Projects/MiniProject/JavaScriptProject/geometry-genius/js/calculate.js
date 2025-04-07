document.getElementById('caclculate-1').addEventListener('click', function(){
    const triangleInputValue1 = getIdFromInputText ('triangle-input1');
    const triangleInputValue2 = getIdFromInputText ('triangle-input2');

    const triangleAreaValue = 0.5*triangleInputValue1*triangleInputValue2;

    const addText = document.getElementById('add-text');
    addText.innerText = '1.Triangle';
    const addTriangleAreaValue = document.getElementById('add-triangle-area-value');
    addTriangleAreaValue.innerText = triangleAreaValue;

    const addCm = document.getElementById('add-cm');
    addCm.innerText = "\u33a0"

    const addBtn = document.getElementById('add-btn');
    addBtn = 'convert m^2'


     
    const addPTag = document.createElement('p');
    const addBtnTag = document.createElement('button');
    addBtnTag.innerText = 'convert "\u33A1"'
     addPTag.innerText= '1. Triangle , triangleAreaValue,"\u33A0" , addBtnTag' ;

     const areaPlaceId = getIdFromText('calculate-area');
    
    calculate-area.appendChild(addPTag);
    
})