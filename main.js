let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(()=>{
  let date=new Date(); 
  let hours=date.getHours()*60/2;
  let minute=date.getMinutes()*6;
  let second=date.getSeconds()*6;
  
 hr.style.transform=`rotate(${hours}deg)`;
  min.style.transform=`rotate(${minute}deg)`;
  sec.style.transform=`rotate(${second}deg)`;

  
},1000);