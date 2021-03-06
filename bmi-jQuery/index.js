"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

jQuery(document).ready(function($){

    let button = $("#calculate");
    let heightObj = $("#height");
    let weightObj = $("#weight");

    // Grundlegende Funktion
    let calculateBmi = function(){
        let height = parseFloat(heightObj.val().replace(",", "."));
        let weight = parseFloat(weightObj.val());

       
        let bmi = (weight / (height * height));
        let result = Math.round(bmi * 10) / 10;
        
         //Ausgabe:
        $("#bmi").text(("" + result).replace(".", ","));
        
        //BMI Bedeutung
        $("#weight-below", "#weight-normal","#weight-above" ).hide();


        //Berechnung
        if (bmi < 18.6){
            $("#weight-below").show();
        }else if (bmi > 18.5 && bmi < 25){
            $("#weight-normal").show();
        }else if (bmi > 25){
            $("#weight-above").show();
        }

    }

    // Aktion bei Klick
    button.click(calculateBmi);

    //Aktion bei Veränderung (Feld verlassen)
    heightObj.change(calculateBmi);
    weightObj.change(calculateBmi);

    //Aktion bei Veränderung (direkt bei Eingabe)
    heightObj.keyup(calculateBmi);
    weightObj.keyup(calculateBmi);

});


