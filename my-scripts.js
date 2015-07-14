$(function() { //shorthand document.ready function


    /*$('#calc-form').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var data = $("#calc-form :input").serializeArray();
        //console.log(data); //use the console for debugging, F12 in Chrome, not alerts
        var np = $('input[name="PracticeNote.Value"]').val();

        var count = $('input[name="Parciales.Count"]').val();

        var ef = $('input[name="FinalTest.Value"]').val();

        var no = false;

        if (np == null || ef == null)
        {
          no = true;
        }
        var npW = $('input[name="PracticeNote.Weight"]').val();
        var ppW = $('input[name="Parciales.Weight"]').val();
        var efW = $('input[name="FinalTest.Weight"]').val();
        
        var npart = 0;
        for(var i=1; i<=count; ++i)
        {
          var p = $("#Parcial" + i).val();

          if (p == null)
          {
            no = true;
          }

          npart += p *((ppW/100)/count);
        }
        
        var nf = 0;
        nf = (np*(npW/100)) + npart + (ef*(efW/100));
        
        $('.alert').remove();
        
        if (no)
        {
          return;
        }

        if (nf >= 51)
        {
          $(".results").append("<div class='alert alert-success' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Tu Nota es " + nf + "</div>");
        }
        else
        {
          $(".results").append("<div class='alert alert-danger' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Tu Nota es " + nf + "</div>");
        }
        
    });*/
});
$("#plus-btn").click( function(){
    $('.btn-danger').removeClass("hidden");
    var count = $('input[name="Parciales.Count"]').val();
    count++;
    $('input[name="Parciales.Count"]').val(count);

    if (count < 0)
    {
      alert("count " + count);
      count = 1;
    }
    
  $("#partials-content").append("<div class='form-group'> " +
    "<label >Parcial " + count + " </label>" + 
    "<input class='form-control input-lg col-xs-6' id='Parcial" + count + "' type='number' required></input>" + 
    "<div class='help-block with-errors'></div>" +
              "</div>");

});
$(".btn-danger").click(function(){
  var dis = $('input[name="Parciales.Count"]').val();
  $("#Parcial" + dis).parent().remove();
  dis--;
  if (dis <= 0)
  {
      $('.btn-danger').addClass("hidden");
  }
  $('input[name="Parciales.Count"]').val(dis);
  });

 $('input.weight').validator().on('change', function(e) {
      if($(this).val() == "")
      {
        return;
      }

      var npWeight = $('input[name="PracticeNote.Weight"]').val();
      var ppWeight = $('input[name="Parciales.Weight"]').val();
      var efWeight = $('input[name="FinalTest.Weight"]').val();

      document.getElementById('lbl-np').innerHTML = "Nota Pr\xe1ctica " + npWeight + "%";

      document.getElementById('lbl-parciales').innerHTML = "Parciales " + ppWeight + "%";

      document.getElementById('lbl-ef').innerHTML = "Examen Final " + efWeight + "%";
    
    });

$('#calc-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    return;
    // handle the invalid form...
  } else {
    e.preventDefault();
        //console.log(data); //use the console for debugging, F12 in Chrome, not alerts
        var max = $('input[name="MaxGrade"]').val();
        var min = $('input[name="MinGrade"]').val();

        var np = $('input[name="PracticeNote.Value"]').val();

        var count = $('input[name="Parciales.Count"]').val();

        var ef = $('input[name="FinalTest.Value"]').val();

        var no = false;

        if (np == null || ef == null)
        {
          no = true;
        }
        var npW = $('input[name="PracticeNote.Weight"]').val();
        var ppW = $('input[name="Parciales.Weight"]').val();
        var efW = $('input[name="FinalTest.Weight"]').val();
        
        var npart = 0;
        for(var i=1; i<=count; ++i)
        {
          var p = $("#Parcial" + i).val();

          if (p == null)
          {
            no = true;
          }

          npart += p *((ppW/max)/count);
        }
        
        var nf = 0;
        nf = (np*(npW/max)) + npart + (ef*(efW/max));
        
        $('.alert').remove();
        
        if (no)
        {
          return;
        }

        if (nf >= min)
        {
          $(".results").append("<div class='alert alert-success' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Tu Nota es " + nf + "</div>");
        }
        else
        {
          $(".results").append("<div class='alert alert-danger' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Tu Nota es " + nf + "</div>");
        }
    // everything looks good!
  }
})

$('.btn-tog').click(function () {
    $(this).toggleClass('').toggleClass('toggle');

    $('.alert').remove();
    if ($(this).attr('class').indexOf('toggle')>=0)
    {
      $('.page-header').empty();
      $('.page-header').append("Configuraci\xf3n");
      $('.weight').removeClass('hidden');

      $('.grade').addClass('hidden');
    }

    else
    {
      $('.page-header').empty();
      $('.page-header').append('Calculadora de notas');
      
      $('.weight').addClass('hidden');
      $('.grade').removeClass('hidden');
    }
});




