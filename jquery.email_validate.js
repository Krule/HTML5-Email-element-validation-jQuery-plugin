/*!
* HTML5 Simple Email validation jQuery Plugin v1.0
* @link 
* @author Armin Pašalić <http://ovo.ba>
*
* Using email validation regex created by James Watts and Francisco Jose Martin Moreno <http://fightingforalostcause.net/misc/2006/compare-email-regex.php>
*
* This plugin has been kickstarted by Starter <http://starter.pixelgraphics.us/>
*/

(function($){
  
    $.email_validate = function(el, options){
        var base = this;
        base.$el = $(el);
        
        base.validate = function(event){          
          var validate_against_regex = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
          !validate_against_regex.test(base.$el.val()) ? base.handle_invalid(event) : base.handle_valid();
        };
        
        base.handle_invalid = function(event){
          base.$el.trigger('email_validated_as_invalid');
          if (event.type == "blur" && base.$el.val() == ""){
            base.$el.removeClass(options.error_css_style);
            return;
          } else {
            base.$el.focus();
          }
          event.preventDefault();
          base.$el.hasClass(options.error_css_style) ? null : base.$el.addClass(options.error_css_style);
          options.error_message ? base.$el.data("email_validate_error", options.error_message) : null;
        };
        
        base.handle_valid = function(){
          base.$el.trigger('email_validated_as_valid');
          base.$el.removeClass(options.error_css_style).removeData("email_validate_error");
        };
        
        base.init = function(){
          base.options = $.extend({},$.email_validate.defaultOptions, options);
          base.$el.bind("blur", base.validate).closest('form').bind("submit", base.validate);
        };
        
        base.init();
    };
    
    $.email_validate.defaultOptions = {
      error_css_style: "email_validate_error"
    };
    
    
    $.fn.email_validate = function(options){
        return this.each(function(){
            (new $.email_validate(this, options));
        });
    };

    
})(jQuery);