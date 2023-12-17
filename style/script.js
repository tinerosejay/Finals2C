function updateWelcomeMessage() {
    const nameInput = document.getElementById('name-input');
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (nameInput.value) {
      welcomeMessage.textContent = `Hello, ${nameInput.value}!`;
    } else {
      welcomeMessage.textContent = 'Welcome!';
    }
  }
  
  function showHomePage() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('blog-page').style.display = 'none';
  }
  
  function showBlogPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('blog-page').style.display = 'block';
  }
  