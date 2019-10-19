
$(document).ready(function() {
    $("#1").click(function() {     
        var data_cell_1 = $("#data_cell_1");
        
      $.ajax({
        type: "GET",
        url: "http://localhost:4000/question1", 
        success: function(result) {
          console.log(result);
          var output ="<div class=\"top\"" + "<div>" + result.name +"</div>"
          for (var i in result.question) {
            output +=
              "<div>" +" <input type=\"checkbox\">"+ result.question[i]+ "</div>"
            
          }
          output+= "</div>"
          data_cell_1.html(output)
        //   $("table").addClass("table");
        }
      });
    });
  });