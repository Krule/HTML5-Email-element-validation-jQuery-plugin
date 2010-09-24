# Simple email validate #
Simple, email validation plugin for HTML 5 input type email element. Activates on submit and blur (if field is not empty) event. Does not require any additional markup.
## Usage example ##
### HTML ###
    <input name="some_name" type="email">
    <input name="some_name_repeat" type="email">
### jQuery ###
    $('input[type="email"]').email_validate();    
### CSS ###
Plugin adds `email_validate_error` class to input element (or elements) that failed validation. Something like this should do the trick:

    .email_validate_error {
      background: #900;
      color: #fff;
    }