// when the search button is clicked, the following function will execute
$("#submit").on("click", function(event){

  // prevent form from submitting/refreshing the page
  event.preventDefault();

  // get user input from all text boxes and logging it
  var searchTerms = $("#search-terms").val().trim();
  console.log(searchTerms);

  var numArticles = $("#record-count").val().trim();
  console.log(numArticles);

  var startYear = $("#start-year").val().trim();
  console.log(startYear);

  var endYear = $("#end-year").val().trim();
  console.log(endYear);

  // variable for my api key
  var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  // constructing the url
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey 
                  + "&q=" + searchTerms
                  + "&page=1&begin_date=" + startYear + "0000"
                  + "&end_date=" + endYear + "0000";

  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {




});