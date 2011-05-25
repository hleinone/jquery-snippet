# jQuery Snippet Plugin

## Requirements
* [jQuery](http://jquery.com/) (Tested with 1.6, will probably work with older versions too)
* Your snippet elements have ids

## Usage
    ...
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://github.com/hleinone/jquery-snippet/raw/master/jquery.snippet.js"></script>
    <script type="text/javascript">
    //<![CDATA[
    $().ready(function() {
      $("#listItemSnippet").snippet();
      var numbers = [1, 2, 3, 4];
      for (i in numbers) {
        $("#list").append($("#list").snippet("listItemSnippet").html(numbers[i]));
      }
    });
    //]]>
    </script>
    ...
    <ul id="list">
      <li id="listItemSnippet"></li>
