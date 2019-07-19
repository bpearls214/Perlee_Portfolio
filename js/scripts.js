(function() {
  var $form = document.querySelector('#contact-form');
  var $emailInput = document.querySelector('#contact-email');
  var $phoneInput = document.querySelector('#contact-tel');
  var $messageInput = document.querySelector('#contact-message');
  var $input = document.querySelector('.input-box');

  function validateEmail() {
    var value = $emailInput.value;

    if (!value) {
      showErrorMessage($emailInput, 'Email required')
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage($emailInput, 'Please enter a valid email address')
      return false;
    }

    showErrorMessage($emailInput, null);
    return true;
  }

  /* function validatePhone() {
    var value = $phoneInput.value;
    var phoneExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(!value) {
      showErrorMessage($phoneInput, 'Phone is a required field')
      return false;
    }

    if (!phoneExp) {
      showErrorMessage($phoneInput, 'Please enter a valid phone number')
      return false;
    }
  } */

  function validateMessage() {
    var value = $messageInput.value;

    if(!value) {
      showErrorMessage($messageInput, 'Message required');
      return false;
    }

    showErrorMessage($messageInput, null);
    return true;
  }

  function showErrorMessage($input, message) {
    var $container = $input.parentElement;
    var error = $container.querySelector('.error-message');

    if (error) {
      $container.removeChild(error);
    }

    if (message) {
      var error = document.createElement('div')
      error.classList.add('error-message');
      error.innerText = message;
      $container.appendChild(error);
    }
  }

  function validateForm() {
    var isValidEmail = validateEmail();
    // var isValidPhone = validatePhone();
    var isValidMessage = validateMessage();
    return isValidEmail /* && isValidPhone */ && isValidMessage;
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault(); //do not submit to server
    if (validateForm()) {
      alert('Success!');
    }
  })

  $emailInput.addEventListener('input', validateEmail);
  // $phoneInput.addEventListener('input', validatePhone);
  $messageInput.addEventListener('input', validateMessage);
} ) ();
