

// Try using right-click on the preview page. This script disables that functionality.
window.addEventListener('contextmenu', function (e) {
    document.body.innerHTML += alert('Right-click is disabled');
    e.preventDefault();
  }, false);
  
  