var getData = function(){
    var name=  document.getElementsByName("nombre").value;
    var apellido = document.getElementsByName("apellido")[0].value;
    console.log(document.getElementsByName("nombre")[0].value + " " + apellido);
  
    var comboBox = document.getElementsByName("tipoSeguro")[0];
    console.log(comboBox);
    var monto=  comboBox.options[comboBox.selectedIndex].value;
  
    document.getElementById("precio").innerHTML= monto + "<br>";
   
  
  
  }
 