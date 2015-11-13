$(document).ready(function(){
	$("#ppltab").tabs();
    $("#radio").buttonset();
	$("#calendrier").datepicker($.datepicker.regional["fr"]);
	$("#gcode").slider({
    	min: 1,
    	max: 5,
    	value: 3,
    	slide: function(event, ui) {
        	$("#amountgc").val(ui.value);
            if ( $('#amountgc').val() == 1){           
                $('#amountgc').css('color', '#fe0000');
                $('#gcode span').addClass('letruc1');
                $('#gcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc2 letruc3 letruc4 letruc5');
            }
            else if ( $('#amountgc').val() == 2){           
                $('#amountgc').css('color', '#f6931f');
                $('#gcode span').addClass('letruc2');
                $('#gcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc3 letruc4 letruc5');
            }
            else if ( $('#amountgc').val() == 3){            
                $('#amountgc').css('color', '#dce300');
                $('#gcode span').addClass('letruc3');
                $('#gcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc4 letruc5');
            }
            else if ( $('#amountgc').val() == 4){         
                $('#amountgc').css('color', '#96E100');
                $('#gcode span').addClass('letruc4');
                $('#gcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc3 letruc5');
            }
            else if ( $('#amountgc').val() == 5){           
                $('#amountgc').css('color', '#1EE100');
                $('#gcode span').addClass('letruc5');
                $('#gcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc3 letruc4');
            }
      	}
    });
    $("#amountgc").val($("#gcode").slider("value"));
	$("#hcode").slider({
    	min: 1,
    	max: 5,
    	value: 3,
    	slide: function(event, ui) {
        	$("#amounthc").val(ui.value);
            if ( $('#amounthc').val() == 1){          
                $('#amounthc').css('color', '#fe0000');
                $('#hcode span').addClass('letruc1');
                $('#hcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc2 letruc3 letruc4 letruc5');
            }
            else if ( $('#amounthc').val() == 2){        
                $('#amounthc').css('color', '#f6931f');
                $('#hcode span').addClass('letruc2');
                $('#hcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc3 letruc4 letruc5');
            }
            else if ( $('#amounthc').val() == 3){       
                $('#amounthc').css('color', '#dce300');
                $('#hcode span').addClass('letruc3');
                $('#hcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc4 letruc5');
            }
            else if ( $('#amounthc').val() == 4){         
                $('#amounthc').css('color', '#96E100');
                $('#hcode span').addClass('letruc4');
                $('#hcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc3 letruc5');
            }
            else if ( $('#amounthc').val() == 5){  
                $('#amounthc').css('color', '#1EE100');
                $('#hcode span').addClass('letruc5');
                $('#hcode span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc3 letruc4');
            }
      	}
    });
    $("#amounthc").val($("#hcode").slider("value"));
	$("#hlife").slider({
    	min: 1,
    	max: 5,
    	value: 3,
    	slide: function(event, ui) {
        	$("#amounthl").val(ui.value);
            if ( $('#amounthl').val() == 1){          
                $('#amounthl').css('color', '#fe0000');
                $('#hlife span').addClass('letruc1');
                $('#hlife span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc2 letruc3 letruc4 letruc5');
            }
            else if ( $('#amounthl').val() == 2){            
                $('#amounthl').css('color', '#f6931f');
                $('#hlife span').addClass('letruc2');
                $('#hlife span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc3 letruc4 letruc5');
            }
            else if ( $('#amounthl').val() == 3){           
                $('#amounthl').css('color', '#dce300');
                $('#hlife span').addClass('letruc3');
                $('#hlife span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc4 letruc5');
            }
            else if ( $('#amounthl').val() == 4){          
                $('#amounthl').css('color', '#96E100');
                $('#hlife span').addClass('letruc4');
                $('#hlife span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc3 letruc5');
            }
            else if ( $('#amounthl').val() == 5){        
                $('#amounthl').css('color', '#1EE100');
                $('#hlife span').addClass('letruc5');
                $('#hlife span').removeClass('ui-state-default ui-state-hover ui-state-focus ui-state-active letruc1 letruc2 letruc3 letruc4');
            }
      	}
    });
    $("#amounthl").val($("#hlife").slider("value"));
    $("#commentaire").accordion({collapsible: true, active: null});
    $("#check").button({icons: {primary: "ui-icon-check"}});
    $("#check").click(function(){
        $("#dialog-confirm").removeClass('boxmodal');
        var grcode = $('#amountgc').val();
        var hacode = $('#amounthc').val();
        var halife = $('#amounthl').val();
        $('#result').html("Growth in code : " + grcode + "<br>Happiness in code : " + hacode + "<br>Happiness in life : " + halife);
        $("#dialog-confirm").dialog({
        resizable: false,
        height:300,
        width: 650,
        modal: true,
        buttons: {
        "Valider": function() {
          $(this).dialog("close");
          $("#dialog-valid").removeClass('boxmodal');
          $("#dialog-valid").dialog({
            resizable: false,
            height: 300,
            width: 300,
            modal: true,
            buttons: {"Ok": function() {$(this).dialog("close");}}
          });
          if (halife == 1) {$("#dialog-valid").html("Tire sur mon doigt, ça ira mieux !");}
          else if (halife == 2) {$("#dialog-valid").html("Ça sera mieux demain !");}
          else if (halife == 3) {$("#dialog-valid").html("Journée moyenne, ainsi soit-il.");}
          else if (halife == 4) {$("#dialog-valid").html("Aaaah, une assez bonne journée alors ?");}
          else if (halife == 5) {$("#dialog-valid").html("Bravo.");}
        },
        Annuler: function() {
          $(this).dialog("close");
        }
      }
    });
    });
    $("#eleves").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
});