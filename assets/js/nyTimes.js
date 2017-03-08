// creating a variable for my API key
var authKey = "df60725129474a40a45825404ce24c3a";

// each of these variables corresponds to user input boxes
var searchTerms = "";
var numArticles = 0;
var startYear = 0;
var endYear = 0;

// creating a query url based on the query term
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// creating a function that will run our search
// the function requires two paramenters:
// number of articles and the final url
function runSearch(numArticles, queryURL){

  // request data from api using AJAX
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  // process AJAX call
  .done(function() {
    console.log("url: " + queryURL);


  });
}






//when the search button is clicked, the following function will execute
$("#submit").on("click", function(event){

  // get user input from all text boxes and logging it
  var searchTerms = $("#search-terms").val().trim();
  console.log(searchTerms);

  var numArticles = $("#record-count").val().trim();
  console.log(numArticles);

  var startYear = $("#start-year").val().trim();
  console.log(startYear);

  var endYear = $("#end-year").val().trim();
  console.log(endYear);

  // calling the runSearch function
  runSearch(numArticles, queryURL);

});
