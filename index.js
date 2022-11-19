x=document.getElementById("bb")
v=document.getElementById("b")
guestGoal=0
awayGoal=0

function xx(){
    guestGoal+=1
    x.innerText=guestGoal
}
function y(){
    guestGoal+=2
    x.innerText=guestGoal
    
    
    
}
function z(){
    guestGoal+=3
    x.innerText=guestGoal
}
function zz(){
    x.innerText=0
    v.innerText=0
    guestGoal=0
    awayGoal=0
}
function xxx(){
    awayGoal+=1
    v.innerText=awayGoal
}
function yy(){
    awayGoal+=2
    v.innerText=awayGoal
    
    
    
}
function zzz(){
    awayGoal+=3
     v.innerText=awayGoal
}