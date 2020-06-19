let color = "white";
$("#chbg").click(() =>{

    if(color == "gray"){
        color = "white"
    }
    else if(color == "white"){
        color = "gray"
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

$("#btnLogin").click(() =>{
    const username = document.getElementById("username");
    const pass = document.getElementById("password");
    let request = $.ajax({
        url: "login",
        method: "POST",
        dataType: "html"
      });
      request.done( (msg) =>{
        $( "#log" ).html( msg );
      });
       
})


