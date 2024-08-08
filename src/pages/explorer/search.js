document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResultsDiv = document.getElementById('search-results');
    const contentDiv = document.getElementById('content');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario recargue la página
        
        const query = searchInput.value.toLowerCase();
        const paragraphs = contentDiv.getElementsByTagName('p');
        let results = '';

        for (let i = 0; i < paragraphs.length; i++) {
            const paragraph = paragraphs[i];
            const text = paragraph.textContent.toLowerCase();
            if (text.includes(query) && query !== '') {
                results += `<p>${paragraph.innerHTML}</p>`;
            }
        }

        searchResultsDiv.innerHTML = results || '<p>No se encontraron resultados.</p>';
    });
});