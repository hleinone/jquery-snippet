/**
 * jQuery Snippet Plugin v1.0
 * 
 * Copyright 2011, Hannu Leinonen
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * jQuery.snippet
 * 
 * Easily create HTML snippets and stores them in the snippet element's
 * parent element's data by the snippet element's id. Get the snippet
 * by $("#parent").snippet("snippetId")
 */
(function($) {
  $.fn.snippet = function() {
  }
  
  $.fn.snippet = function(snippetId) {
    if (typeof snippetId === "undefined") {
      return this.each(function(index, element) {
        $(element).parent().data($(element).attr("id"), $(element).removeAttr("id"));
        $(element).remove();
      });
    } else {
      return this.data(snippetId).clone(true);
    }
  }
})(jQuery);
