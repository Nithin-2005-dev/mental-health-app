let happybtn=document.querySelector('#happy');
let normalbtn=document.querySelector('#normal');
let sadbtn=document.querySelector('#dull');
let angrybtn=document.querySelector('#angry');

let feelingDiscription=document.querySelector('#description');
happybtn.addEventListener('click',()=>{
    feelingDiscription.innerText="Hello there! It's wonderful to see you in such a happy mood! If there's anything you'd like to chat about or explore together, feel free to share."
    happybtn.style.opacity=1
    normalbtn.style.opacity=0.5
    sadbtn.style.opacity=0.5
    angrybtn.style.opacity=0.5
})
normalbtn.addEventListener('click',()=>{
    feelingDiscription.innerText="Hello! Whether you're having a calm and normal day or if there's something on your mind, I'm here to chat. What's on your agenda today?"
    happybtn.style.opacity=0.5
    normalbtn.style.opacity=1
    sadbtn.style.opacity=0.5
    angrybtn.style.opacity=0.5
})
sadbtn.addEventListener('click',()=>{
    feelingDiscription.innerText="I'm sorry to hear that you're feeling sad. If you need someone to talk to or if there's anything specific on your mind, I'm here for you."
    happybtn.style.opacity=0.5
    normalbtn.style.opacity=0.5
    sadbtn.style.opacity=1
    angrybtn.style.opacity=0.5
})
angrybtn.addEventListener('click',()=>{
    feelingDiscription.innerText="Hello. I sense there might be some frustration. If you want to talk about what's bothering you or if there's anything I can do to assist, feel free to share."
    happybtn.style.opacity=0.5
    normalbtn.style.opacity=0.5
    sadbtn.style.opacity=0.5
    angrybtn.style.opacity=1
})
let wish=document.querySelector('#greet');
let time=new Date();
let hour=time.getHours;
if(hour>0 && hour<12){
    wish.innerText= "Dear User!Good Morning"
}
else if(hour>12 && hour<18){
    wish.innerText= "Dear User!Good Afternoon"
}
else{
    wish.innerText= "Dear User!Good Evening"
}