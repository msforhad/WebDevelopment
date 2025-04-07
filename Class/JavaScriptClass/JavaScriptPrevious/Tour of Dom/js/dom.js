const sections = document.getElementsByTagName('section');
for(const section of sections){
    section.style.backgroundColor = 'gray';
    section.style.border = '3px solid pink';
    section.style.borderRadius = '8px';
    section.style.paddingLeft = '5px'
    section.style.marginBottom = '5px'
};

const editTitle = document.getElementById('header-title1');
editTitle.classList.add('bg-color');
editTitle.classList.remove('font-size');
