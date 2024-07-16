let stars=document.getElementById('stars1');
let moon2=document.getElementById('moon2');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river5=document.getElementById('river5');
let boat6=document.getElementById('boat6');
let name=document.querySelector('.name');

window.onscroll=function(){
let value=scrollY;
stars.style.left=value +"px";
moon2.style.top=value*3.5 +'px';
mountains3.style.top=value*1.5 +'px';
mountains4.style.top=value*1.5 +'px';
river5.style.top=value +'px';
boat6.style.top=value +'px';
boat6.style.left=value*2 +'px';

name.style.fontSize=value+'px';
if(scrollY>=52){
    name.style.fontSize=52+'px';
    if(scrollY>=52){
        name.style. position='fixed';
    }
    if(scrollY>=433){
        name.style.display='none';
    }else{
        name.style. display='inline-block';
    }
}

let back=document.getElementById('main');
if(scrollY>=103){
    back.style.background='linear-gradient(#526c9b,#360161)';
}else{
    back.style.background='linear-gradient(#0e0131,#360161';
    
}

}
