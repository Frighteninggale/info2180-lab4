document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('load-data-btn');
    const resultArea = document.getElementById('result-area');

    loadButton.addEventListener('click', function() {
        resultArea.innerHTML = "Loading data...";

        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                resultArea.innerHTML = data;
            })
            .catch(error => {
                resultArea.innerHTML = 'Error fetching data: ' + error.message;
                console.error('Fetch error:', error);
            });
    });
});

$(document).ready(function() {
    $('#load-data-btn').on('click', function() {
        const $resultArea = $('#result-area');
        
        // Show a loading message
        $resultArea.text("Loading data via jQuery...");

        $.ajax({
            url: 'superheroes.php',
            
            method: 'GET',
            
            dataType: 'html', 
            
            success: function(data) {
                $resultArea.html(data);
            },
            
            error: function(jqXHR, textStatus, errorThrown) {
                $resultArea.html('Error fetching data: ' + textStatus + ' - ' + errorThrown);
                console.error("AJAX Error:", textStatus, errorThrown);
            }
        });
    });
});