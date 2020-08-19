$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});


// Original with two functions

        // $("#loginbtn").click(function(){
        //     $('#loginModal').modal('show');
        // });

        // $("#reservebtn").click(function(){
        //     $('#reserveModal').modal('show');
        // });


// New with one function

    $('#loginbtn, #reservebtn').click(function () {
    if (this.id == 'loginbtn') {
        $('#loginModal').modal('show');
    }
    else if (this.id == 'reservebtn') {
        $('#reserveModal').modal('show');
    }
    });