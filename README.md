# Simple email validate #

Simple email validation plugin for HTML 5 input type email element.

*  Activates on submit and blur event.
*  If validation has failed, sets [`jQuery.data("email_validate_error")`][1] as error_message if option provided. This functionality has been added in order to provide an unobtrusive method for displaying error messages. Option is, as it should be, entirely optional.
*  On submit failed field is focused.
*  On blur, if field is empty nothing will happen.
*  After validation one of two possible events is triggered.
  * `email_validated_as_invalid` if it fails, or
  * `email_validated_as_valid` if it passes validation.
*  Does not require any additional HTML markup, but I do recommend usage of [`data-`][2] attribute in order to set error messages.

This is the last major update of this plugin. I have starting working on HTML5 form validator which this plugin will be a part of.
## Usage example ##
### HTML ###
    <input name="some_name" type="email">  
or    

    <input name="some_name" type="email" data-error_message="This is not a valid email address">
### jQuery ###
    $('input[type="email"]').email_validate();
or

    $('input[type="email"]').email_validate({
      error_message: $(this).attr("data-error_message");
    });

or even

    $('input[type="email"]').email_validate()
                            .bind('email_validated_as_invalid', callSomeFunction)
                            .bind('email_validated_as_valid', callSomeOtherFunction);
### CSS ###
Plugin adds `email_validate_error` class to input element (or elements) that failed validation. Something like this should do the trick:

    .email_validate_error { 
      background: #900;
      color: #fff;
    }
    
[1]:http://api.jquery.com/jQuery.data/
[2]:http://html5doctor.com/html5-custom-data-attributes/