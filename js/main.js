/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

$(document ).ready(function() {
    $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        invalidHandler: function(event, validator) {
            //any custom invalid functionality goes here 
        },
        rules: {
            "your-name": {
                maxlength: 128,
                lettersonly: ''
            },
            "your-state": {
                exactLength: 2,
                stateUS: ''
            },
            "your-zip": {
                exactLength: 5,
                digits: true
            },
            "card-holder-name": {
                maxlength: 128,
                lettersonly: ''
            },
            "card-number": {
                creditcard: true
            },
           "cvv": {
               exactLength: 3,
               digits: true
            },
            "comments": {
                maxlength: 500
            }
        }
    });

    //general validation for all inputs in the form to be required
    $("div.form-group.required input, div.form-group.required select, div.form-group.required textarea").each(function(){
        $(this).rules("add", {
            required: true
        });
    });


    //custom validator for exact length
    jQuery.validator.addMethod("exactLength", function(value, element, param) {
        return this.optional(element) || value.length == param;
    }, $.validator.format("Please enter exactly {0} characters."));
});
