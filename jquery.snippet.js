/**
 * jQuery Snippet Plugin v1.0
 * 
 * Copyright 2011, Hannu Leinonen
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
  var snippets = [];

  /**
   * $.snippet('id')
   * 
   * Retrieve the HTML snippet.
   */
  $.snippet = function(snippetId) {
    return snippets[snippetId].clone();
  };

  /**
   * $('selector').snippet()
   * 
   * Store the HTML snippets.
   */
  $.fn.snippet = function() {
    return this.each(function(index, element) {
      snippets[$(element).attr("id")] = $(element).removeAttr("id");
      $(element).remove();
    });
  };
})(jQuery);
