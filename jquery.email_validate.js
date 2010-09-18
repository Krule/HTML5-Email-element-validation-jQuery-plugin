/*!
* HTML5 Simple (for now) Email validation jQuery Plugin v0.1
* @link http://github.com/Krule/HTML5-Email-element-validation-jQuery-plugin
* @author Armin Pašalić <http://ovo.ba>
*
* Using email validation regex created by James Watts and Francisco Jose Martin Moreno <http://fightingforalostcause.net/misc/2006/compare-email-regex.php>
*
* This plugin has been kickstarted by Starter <http://starter.pixelgraphics.us/>
*/

(function($){
    $.email_validate = function(el){
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.$el.data("email_validate", base);
        
        base.validate = function(event){
          var validate_against_regex = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
          if (!validate_against_regex.test(base.$el.val())){
            event.preventDefault();
            base.$el.addClass("email_validate_error").focus();
          } else {
            base.$el.removeClass("email_validate_error");
          }
        };
        
        base.init = function(){
          base.$el.closest('form').bind("submit", base.validate)
        };
        
        base.init();
    };
    
    $.fn.email_validate = function(){
        return this.each(function(){
            (new $.email_validate(this));
        });
    };
    
})(jQuery);
