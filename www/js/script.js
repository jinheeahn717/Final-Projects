var app = {
    initialize: function() {

        // To do with pure Javascrupt
        //element.addEventListener("click", function(){ alert("Hello World!"); });

      
        $('.changePage').click(function() {
            if ($(this).data('nextPage')) {
                app.changePage($(this).data('nextPage'));
            } else {
                alert("You've reached the last page");
            }
        });
        $('.js-moveMe').click(function() {
            $(this).addClass('left');
        });

        app.exampleInputGoal = document.getElementById("exampleInputGoal");
        app.exampleInputGoal2 = document.getElementById("exampleInputGoal2");
        app.exampleInputPeriod = document.getElementById("exampleInputPeriod");
        app.period = document.getElementById("period");

        app.startBtn = document.getElementById("startBtn");
        app.startBtn.addEventListener("click",function(){
            app.exampleInputGoal2.value = app.exampleInputGoal.value;
            app.period.value = app.exampleInputPeriod.value;
        });

        app.changeImg = function(dayLeft){

            var lungImg = document.getElementById("lungImg")

            if( dayLeft > 2){
                //load the black img
                lungImg.src = "img/1.png";
            }
            else{
                if(dayLeft == 0){
                    document.getElementById("checkBtn").click();
                    return false;
                }
                var imgNum = 4 - dayLeft;
                lungImg.src = "img/" + imgNum + ".png" ;
            }
        }
    }
    changePage: function(id) {
        console.log("change page");
        $('.page').each(function() {
            $(this).hide();
        });
        $(id).fadeIn();
    }
}

function modify_exampleInputGoal2(val) {
    var exampleInputGoal2 = document.getElementById('exampleInputGoal2').value;
    
    var new_qty = parseInt(exampleInputGoal2,10) + val;
    
    if (new_qty = < 0) {
        new_qty = "No cigarettes";
    } 
    
    document.getElementById('exampleInputGoal2').value = new_qty;
    return new_qty;
}



