
// chalta he rahega jab tk qayamat na aajaye

// setInterval(function(){
//     document.write("hello world")
// },1000)

//alag se function me rakhna ho
// function timer(){
//     document.write("Ahmed","<br>")
// }
// setInterval(timer,2000)


// setTimeout(function () {
//     document.write("abcd")
    
// }, 4000);


//agar counting print krwani ho serinterval se

// var num = 0
// setInterval(function(){
//     num++
//     console.log(num);
// },1)



//stop watch wark start
//ye javascript k apne hen 3 varibles jis se machine chalegi
var minutes = 0
var seconds = 0
var miliseconds = 0
var hour = 0
// or jis per chalegi machine index.html me 
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')
var gethour = document.getElementById('hour')

var interval;




function start(){
   interval = setInterval(function(){
        miliseconds++
        getmili.innerHTML = miliseconds
        if(miliseconds >=99){
           seconds++
           getsec.innerHTML = seconds
           miliseconds=0
       }
       else if(seconds>=59){
           minutes++
           getmin.innerHTML = minutes
           seconds=0
        }
        else if(minutes>=59){
            hour++
            gethour.innerHTML = hour
            minutes=0
        }
},10)
document.getElementById('dis').disabled = true

}











//buttons work 
function stop(){
    clearInterval(interval)
    document.getElementById("dis").disabled = false
}

function reset(){
    minutes =  0
    miliseconds = 0
    seconds = 0
    getmin.innerHTML = minutes
    getmili.innerHTML = miliseconds
    getsec.innerHTML = seconds


}
















