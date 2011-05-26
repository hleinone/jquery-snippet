# jQuery Snippet Plugin
Easy HTML snippets for jQuery.

## The Problem
Don't you hate this?

    $("#element").html("<li>" + something + "</li>");

Well, I do! And you should too, since it's generally a bad practice to mix the representation and the logic.

## The Solution
Snippets! Create the HTML snippets right where they would appear, and snippetize them. You'll get the DOM structure clear from the beginning. And you can also trust [the validator](http://validator.w3.org/)'s results.
### Let Me Show You How

    ...
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://github.com/hleinone/jquery-snippet/raw/master/jquery.snippet.js"></script>
    <script type="text/javascript">
    //<![CDATA[
    $().ready(function() {
      $("#listItemSnippet").snippet();
      var numbers = [1, 2, 3, 4];
      for (i in numbers) {
        $("#list").append($("#list").snippet("listItemSnippet").text(numbers[i]));
      }
    });
    //]]>
    </script>
    ...
    <ul id="list">
      <li id="listItemSnippet"></li>
    </ul>

### [The Demo](http://jsfiddle.net/hleinone/teAZE/)

## The Requirements
* [jQuery](http://jquery.com/) (Tested with 1.6, will probably work with older versions too)
* Your snippet elements have ids

