document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('heading').classList.add('visible');
  }, 500);

  setTimeout(function() {
    document.getElementById('description').classList.add('visible');
  }, 1500);

  setTimeout(function() {
    document.getElementById('download').classList.add('visible');
  }, 3000);
});