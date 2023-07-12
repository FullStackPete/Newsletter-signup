function submitForm(event) {
    var email = document.querySelector('#email').value;
    if (!isValidEmail(email)) {
      document.querySelector('.emailInput').classList.add('wrong');

      var h6 = document.querySelector('h6.error');
          if (!h6) {
            h6 = document.createElement('h6');
            h6.classList.add('error');
            h6.textContent = 'Valid email required';
            var div = document.querySelector('.container h6');
            div.parentNode.insertBefore(h6, div.nextSibling.nextSibling.nextSibling);
          }

      event.preventDefault();
      return;
    }

    location.href = 'confirmation.html';
  }

  function isValidEmail(email) {
    // This is a simple regex to check if the email is valid
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  var input = document.querySelector('.emailInput');
      input.addEventListener('input', function() {
        this.classList.remove('wrong');
        var h6 = document.querySelector('h6.error');
        if (h6) {
          h6.remove();
        }
        });