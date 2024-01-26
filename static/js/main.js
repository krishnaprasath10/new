$(document).ready(function () {  
    var currentGfgStep, nextGfgStep, preGfgStep;  
    var opacity;  
    var current = 1;  
    var steps = $("fieldset").length;  
    setProgressBar(current);  
    $(".next-step").click(function () {  
        currentGfgStep = $(this).parent();  
        nextGfgStep = $(this).parent().next();  
        $("#progressbar li").eq($("fieldset")  
            .index(nextGfgStep)).addClass("active");  
        nextGfgStep.show();  
        currentGfgStep.animate({ opacity: 0 }, {  
            step: function (now) {  
                opacity = 1 - now;  
                currentGfgStep.css({  
                    'display': 'none',  
                    'position': 'relative'  
                });  
                nextGfgStep.css({ 'opacity': opacity });  
            },  
            duration: 500  
        });  
        setProgressBar(++current);  
    });  
    $(".pre-step").click(function () {  
        currentGfgStep = $(this).parent();  
        preGfgStep = $(this).parent().prev();  
        $("#progressbar li").eq($("fieldset")  
        .index(currentGfgStep)).removeClass("active");  
        preGfgStep.show();  
        currentGfgStep.animate({ opacity: 0 }, {  
            step: function (now) {  
                opacity = 1 - now;  
                currentGfgStep.css({  
                    'display': 'none',  
                    'position': 'relative'  
                });  
                preGfgStep.css({ 'opacity': opacity });  
            },  
            duration: 500  
        });  
        setProgressBar(--current);  
    });  
    function setProgressBar(currentStep) {  
        var percent = parseFloat(100 / steps) * current;  
        percentpercent = percent.toFixed();  
        $(".pbar")  
            .css("width", percent + "%")  
    }  
    $(".submit").click(function () {  
        return false;  
    })  
});  

$(document).ready(function () {
    var selectedRadioButtonLabel;

    function updateNextButtonState() {
      var anyCheckboxChecked = $('input[name="flexRadioDefault"]:checked').length > 0;
      $('#nextButton').prop('disabled', !anyCheckboxChecked);

      if (anyCheckboxChecked) {
        selectedRadioButtonLabel = $('label[for="' + $('input[name="flexRadioDefault"]:checked').attr('id') + '"]').text();
      }
    }

    $('input[name="flexRadioDefault"]').on('change', function () {
      updateNextButtonState();
    });

    $('#nextButton').on('click', function () {
      if (selectedRadioButtonLabel === 'Apartment') {
        console.log(selectedRadioButtonLabel);
        // Replace Section 1 content with Section 2
        $('#section1').html($('#section2').html());
      } else {
        console.log("Next button clicked, but no radio button selected or the selected radio button is not 'Apartment'.");
      }
    });

    updateNextButtonState();
  });
  