//Helper function to retrieve json quotes via RESTful APIs
function randomQuote(   ) {
    randomColor();
    $.ajax({
            url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
            dataType: 'jsonp',
            success: function(result){
                //Sends quote's text and authos to html elements
                json = eval(result);
                $(".quote-text").html('<h2><i class="fa fa-quote-left fa-1x fa-pull-left"></i>' +
                 json["quoteText"] + '<i class="fa fa-quote-right fa-1x fa-pull-right"></i><h2>');
                $(".quote-author").html("<h4>- " + json["quoteAuthor"] + "<h4>")

                //Sends current quote to twitter button
                var quote = json["quoteText"];
                quote = quote.replace(/ /g, "%20");
                var twitter_url = "https://twitter.com/intent/tweet?text="
                var hashtags = "&hashtags=random,quotes"
                $('.twitter-share-button').attr('href', twitter_url + quote + hashtags);
            }
    });
};

//Helper function that chooses a random background color
function randomColor() {
    var col = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var rand = col[Math.floor(Math.random() * col.length)];
    $("body").css("background-color",rand);
    $(".quote-box").css("color",rand);
    $(".fa-square-o").css("color",rand);
    $(".fa-twitter").css("color",rand);
    $(".new-quote-btn").css("background-color",rand);

}

// Consuming random quotes RESTful APIs in json-jsonp format
$(document).ready(function() {

// Helper function that retrieves random quote through APIs

    // Consuming random quotes RESTful APIs in json-jsonp format at page load
    randomQuote()

    // Consuming random quotes RESTful APIs in json-jsonp format at button pressing
    $(".new-quote-btn").on("click", function(){
        randomQuote()
    });

    // Button becomes blurred (loses focus) after release
    $(".btn").mouseup(function(){
        $(this).blur();
    })

    //Activate and deactivate buttons animations
    $(".link-button").mouseenter(function() {
        $(this).addClass("animated shake");
    });
    $(".link-button").mouseleave(function() {
        $(this).removeClass("animated shake");
    });
});