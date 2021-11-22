function clock(){  // function for clock time!!
var hours = document.getElementById('hour');
var mins = document.getElementById('min');
var secs = document.getElementById('sec');
var am =document.getElementById('ampm');
var wish =document.getElementById('gdwish');

var time = new Date();  // getting Time

var a =time.getHours()%12||12;  
var b =time.getMinutes();
var c =time.getSeconds();
var d =time.getHours();
if(a<10)a = "0"+a;
if(b<10)b = "0"+b;
if(c<10)c = "0"+c;
if (time.getHours()<12) {
    am="AM"}else{am="PM"
}
if(d>5&&d<12){
    wish ="GOOD MORNING!!"
}else if(d>=12&&d<14){
    wish ="GOOD AFTERNOON!!"
}else if(d>=14&&d<20){
    wish="GOOD EVENING!!"
}
else if(d>=20&&d<23){
    wish ="GOOD NIGHT!!"
}else{wish="NIGHT OWL!!"}
 hours.innerHTML=a;
 mins.innerHTML=b;
 secs.innerHTML=c;
 ampm.innerHTML=am;
 gdwish.innerHTML=wish;
}setInterval(clock,1000);

//setting time dynamicaly
function makediv(){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","dyna-blk");
    const sel1 =document.getElementById("wake");
    const val1 =sel1.options[sel1.selectedIndex].text; 
    //x.options[index].text//index=x.selectedIndex;

    const sel2 = document.getElementById("lunch");
    const val2=sel2.options[sel2.selectedIndex].text;

    const sel3 = document.getElementById("nap");
    const val3=sel3.options[sel3.selectedIndex].text;
    newDiv.innerText="Set Wake-up Time: "+val1+"\n"+"Set Lunch Time: "+val2+"\n"+"Set Nap Time: "+val3;

    const existDiv = document.getElementById("left-kd");
    existDiv.appendChild(newDiv);

    //using jquery to disable the button
    $(".left-tb3").attr("disabled", true);   
}
//setwake up time;;  to img and hiii

function setTime(){
    var hour1 = new Date().getHours();
    var i = document.getElementById("wake").value;
    if(i==hour1){
        document.getElementById("right-tb-img").style.backgroundImage="url(./CLock_XD/wakeup_image.svg)";
        document.getElementById("right-tb-text").innerHTML="WAKE-UP!!"
    }

    var j = document.getElementById("lunch").value;
    if(j==hour1){
        document.getElementById("right-tb-img").style.backgroundImage="url(./CLock_XD/lunch_image.svg)";
        document.getElementById("right-tb-text").innerHTML="LET'S HAVE SOME LUNCH !!"
    }

    var k = document.getElementById("nap").value;
    if(k==hour1){
        document.getElementById("right-tb-img").style.backgroundImage="url(./CLock_XD/goodnight_image.svg)";
        document.getElementById("right-tb-text").innerHTML="GOOD NIGHT !!"
    }
    makediv(); //function for calling dynamic div
}