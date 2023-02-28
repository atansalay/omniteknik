function myfunction(){
    var element = document.body;
    element.classList.toggle("dark-mode")
    var tut =document.getElementById("ikon");
    if (tut.classList=!"fa-solid fa-moon"){
        tut.classList.toggle("fa-solid fa-sun")
    }
    else{
       tut.classList.toggle("fa-solid fa-moon")

    }

}
