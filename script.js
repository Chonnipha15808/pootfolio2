for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-50px";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.animation=`fall ${5+Math.random()*5}s linear infinite`;

document.body.appendChild(heart);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{transform:translateY(-50px);}
100%{transform:translateY(110vh);}
}
`;

document.head.appendChild(style);
