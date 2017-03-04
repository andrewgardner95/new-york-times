// http://nytarticle-search.herokuapp.com/

var searchTerm = $("#search-term").val().trim();
var recordCount = parseInt($("#record-count").val().trim());
var startYear = parseInt($("#start-year").val().trim());
var endYear = parseInt($("#end-year").val().trim());


 //Event listener for all buttons
    $(".fields").on("click", function() {
      var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
      var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=" + searchTerm + "&;

  console.log(queryURLBase);

      $.ajax({
          url: queryURLBase,
          method: "GET"
        })
        .done(function(response) {

        		var results = response.data;








   	});



        // id's 
        // #search-term

       // #record-count
       // #start-year
       //#end- year
       // #submit
       // #reset
       // #top-articles
