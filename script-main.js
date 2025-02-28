document.querySelectorAll('aside .internal-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      document.querySelector('article').innerHTML = `<object type="text/html" data="${href}" style="width:100%; height:100%;"></object>`;
    });
  });
  