friends=[];
function submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
    var name5=document.getElementById("name5").value;
    friends.push(name1);
    friends.push(name2);
    friends.push(name3);
    friends.push(name4);
    friends.push(name5);
    console.log(friends);
    document.getElementById("display").innerHTML=friends;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort(){
    friends.sort();
    console.log(friends);
    document.getElementById("display").innerHTML=friends;
}
