/*progress bar*/

let actual = 0;
let previous = 0;

$(".next").click(function() {
    if (actual == 0) {
        actual++;
        $('.stage' + actual).show();
        $('.stage' + previous).hide();
        $('.bar' + actual).addClass('active');
    } else {
        previous = actual;
        actual++;
        $('.stage' + actual).show();
        $('.stage' + previous).hide();
        $('.bar' + actual).addClass('active');
    }
});

$(".previous").click(function() {
    if (previous == 0) {
        actual = previous;
        $('.stage' + actual).show();
        $('.stage' + (actual + 1)).hide();
        $('.bar' + (actual + 1)).removeClass('active');
    } else {
        actual = previous;
        previous--;
        $('.stage' + actual).show();
        $('.stage' + (actual + 1)).hide();
        $('.bar' + (actual + 1)).removeClass('active');
    }
});

/*Add content*/
$('.add-check').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.demo1 .box-list-item').append("<label><input type='checkbox' name='Cuisine" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});
$('.add-check-service').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.demo1 .box-list-item').append("<label><input type='checkbox' name='services" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});
$('.add-check-destination').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.destination-box .box-item').append("<label><input type='checkbox' name='Cuisine" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});

/*close button*/

$(".invoice-close").click(function() {
    $(this).parent().remove();
})

/*Add invoice bar*/
$("#addinvoice").click(function() {
    $("#container").append('<div class="band d-flex flex-wrap"><input class="mr-auto w-auto p-2" type="text" value="" placeholder="Title Goes Here"><input class="mr-4 w-auto p-2 invoice-txt" type="text" value="" placeholder="2500.00"><i class="far fa-times-circle invoice-close"></i></div>');
    $(".invoice-close").click(function() {
        $(this).parent().remove();
    })
});

/*Add new species*/
$(".close-chk").click(function() {
    $(this).parent().remove();
})
$("#addspecies").click(function() {
    var values = $(this).siblings('.add-species').val();
    $("#species1").append('<div class="box d-flex"> <span class="img-round"> <img src = "./images/bird.png" alt = "" class = "height-17" > </span> <span> <p> "English Name" </p> <p class = "fs-12 light-gray"> Scientific Name </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*Add atttractions day 1*/
$("#addattractions").click(function() {
    $("#newattraction").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions1").click(function() {
    $("#newattraction").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions2").click(function() {
    $("#newattraction").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions3").click(function() {
    $("#newattraction").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
/*Add atttractions day 2*/
$("#addattractions00").click(function() {
    $("#newattraction01").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions01").click(function() {
    $("#newattraction01").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions02").click(function() {
    $("#newattraction01").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions03").click(function() {
    $("#newattraction01").append('<div class="box d-flex mx-3"> <span> <p> Title Goes Here </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});



/*Add destination day 1*/

$("#adddestination").click(function() {
    $("#newdestination").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination1").click(function() {
    $("#newdestination").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination2").click(function() {
    $("#newdestination").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination3").click(function() {
    $("#newdestination").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination4").click(function() {
    var valu = $('.add-check-field').val();
    $("#newdestination1").replaceWith('<div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6">        <img src="./images/surfing.png" class="desc-img" alt="">   </div>  <div class="col-lg-6 col-md-6 col-sm-6 description">       <div class="sec-1">           <h1 class="fs-24 blue">' + valu + ' </h1>         <p>Type goes here</p>     </div>      <div class="sec-2">          <p class="card-text"><img src="./images/Flag_of_India.svg" class="flag" alt=""> Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala          </p>      </div>  <div class="sec-3">         <span class="fs-13 flag-img1 w-100 d-flex align-items-center mt-2"><p class="fs-14 ">Activities:</p><span class="img-round"><img src="./images/bird.png" alt="" class="ml-4  height-17"></span>            <span class="img-round"> <img src="./images/butterfly.png" alt="" class="height-17"> </span>            <span class="img-round"> <img src="./images/fish.png" alt="" class="height-17"></span>            </span>     </div>     <div class="sec-4 mt-2">         <span class="d-flex rating-card"><p>Rating: </p><i class="fas fa-star  yellow "></i><i class="fas fa-star  yellow "></i><i class="fas fa-star  yellow "></i><i class="fas fa-star  yellow "></i><i class="fas fa-star  gray "></i></span>        </div>    </div></div>');

});

/*Add destination day 2*/

$("#adddestination00").click(function() {
    $("#newdestination01").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination01").click(function() {
    $("#newdestination01").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination02").click(function() {
    $("#newdestination01").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination03").click(function() {
    $("#newdestination01").append('<div class="box d-flex mx-3"> <span> <p> Destination Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});


/*Add accommodation day 1*/
$("#addaccommodation").click(function() {
    $("#newaccommodation").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation1").click(function() {
    $("#newaccommodation").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation2").click(function() {
    $("#newaccommodation").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation3").click(function() {
    $("#newaccommodation").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*Add accommodation day 2*/

$("#addaccommodation00").click(function() {
    $("#newaccommodation01").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation01").click(function() {
    $("#newaccommodation01").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation02").click(function() {
    $("#newaccommodation01").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation03").click(function() {
    $("#newaccommodation01").append('<div class="box d-flex mx-3"> <span> <p> Accommodation Name </p> <p class = "fs-12 light-gray"> <span class="d-flex rating-card"><img src="./images/Flag_of_India.svg" class="img-sec m-0 mr-1" alt="">Kerala, India</span> </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*character count*/

input
$('#input').keyup(function() {
    var characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count');
    current.text(characterCount);
});
$('#input1').keyup(function() {
    var characterCount = $(this).val().length,
        current1 = $('#current1'),
        maximum1 = $('#maximum1'),
        theCount1 = $('#the-count1');
    current1.text(characterCount);
});
$('#input2').keyup(function() {
    var characterCount = $(this).val().length,
        current2 = $('#current2'),
        maximum2 = $('#maximum2'),
        theCount2 = $('#the-count2');
    current2.text(characterCount);
});



/*FDD Selection*/

function yesnoCheck(that) {
    if (that.value == "other") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}


/*date range picker*/

$('#reportrange').daterangepicker({
    opens: 'right',
    drops: 'up',
    locale: {
        format: 'DD/MMM/YYYY'
    }
}, function cb(start, end) {
    $('#reportrange span').html(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
});

