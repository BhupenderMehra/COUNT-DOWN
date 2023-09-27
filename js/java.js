const endDate = "31 May 2024 12:00 am";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const count = () =>{
    let end_date=new Date(endDate);
    let now = new Date();
    let timeleft=(end_date - now)/1000 ;
   if(timeleft<0) return;
    inputs[0].value =Math.floor(timeleft/3600/24);  
    inputs[1].value =Math.floor((timeleft/3600)%24);  
    inputs[2].value =Math.floor((timeleft/60)%60);  
    inputs[3].value =Math.floor((timeleft)%60);  
    // console.log(timeleft);
}
count();
// 1 day = 24hr
// 1hr =  60 min 
// 60 min = 3600sec
setInterval(
    ()=>{
        count()
    }
) 