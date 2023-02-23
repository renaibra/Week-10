$(document).ready(function(){
    $("#myForm").submit(function(event){
      event.preventDefault();
      var column1 = $("#column1").val();
      var column2 = $("#column2").val();
      var column3 = $("#column3").val();        
      
      console.log("sbmit " + column1 + " " + column2 + " " +column3);


      $("#myTable tbody").append("<tr><td>" + column1 + "</td><td>" + column2 + "</td><td>" + column3 + "</td></tr>");
      $("#myForm")[0].reset();
    });
  });
