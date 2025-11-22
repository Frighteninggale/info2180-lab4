document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-btn');
    const searchField = document.getElementById('search-field');
    const resultDiv = document.getElementById('result'); 

    searchButton.addEventListener('click', function() {
        let searchQuery = searchField.value.trim(); 
        const encodedQuery = encodeURIComponent(searchQuery);

        let url = 'superheroes.php';
        if (encodedQuery) {
            url += `?query=${encodedQuery}`;
        }

        resultDiv.innerHTML = "Loading data...";

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                resultDiv.innerHTML = `<span class="not-found">Error fetching data: ${error.message}</span>`;
                console.error('Fetch error:', error);
            });
    });
});