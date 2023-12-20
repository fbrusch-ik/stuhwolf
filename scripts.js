
window.onload = function() {
  for (let i = 1; i <= 10; i++) {
    fetch(`news-articles/news-article-${i}.txt`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        const html = marked(text);
        document.getElementById('news-section').innerHTML += html;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
};
