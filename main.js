var container=[];
function submit(){
    var name_1=document.getElementById("student_1").value;
    var name_2=document.getElementById("student_2").value;
    var name_3=document.getElementById("student_3").value;
    var name_4=document.getElementById("student_4").value;
    
    container.push(name_1);
    container.push(name_2);
    container.push(name_3);
    container.push(name_4);
    console.log(container);

    document.getElementById("list_students").innerHTML=container;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}
function sort(){
     container.sort();
     console.log(container);
     document.getElementById("list_students").innerHTML=container;
}
