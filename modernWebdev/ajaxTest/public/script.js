
$("document").ready(()=>{
})

let color = "white";
$("#chbg").click(() =>{

    if(color == "black"){
        color = "white"
    }
    else if(color == "white"){
        color = "black"
    }
    
    $("body").css("background", color)
});

$("#api").click(() =>{
fetch("/api")
.then(response => response.json())
.then(data =>{
    $("#txtTest").html(JSON.stringify(data));
})
})