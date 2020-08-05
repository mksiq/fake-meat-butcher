window.onload = () => {
  var popup = document.getElementById('popup');

  var terms = document.getElementById('terms');
  var okButton = document.getElementById('popupButton');

  terms.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  okButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};
