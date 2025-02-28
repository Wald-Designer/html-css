document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('aside .container-nav a');
    const articuloPrincipal = document.querySelector('.content-article');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    articuloPrincipal.innerHTML = data;
                })
                .catch(error => console.error('Error al cargar el contenido:', error));
        });
    });
});