document.addEventListener('DOMContentLoaded', async function () {
    // fetching list
    const endPoint = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
    const response = await fetch(endPoint);
    const list = await response.json();

    const suggestions = document.querySelector('.suggestions');
    const suggestionsUl = document.querySelector('.suggestions ul');

    const textInput = document.querySelector('#search-input');
    textInput.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            suggestions.style.display = 'flex';
            textInput.style.borderBottomLeftRadius = 0;
            textInput.style.borderBottomRightRadius = 0;
            let html = '';
            list.forEach((b) => {
                const bookTitle = b.title.toLowerCase();
                const search = e.target.value.toLowerCase();
                if (bookTitle.startsWith(search))
                    html +=
                        '<li><pre><span style="color: #50c4ac;"><b>' +
                        b.title.substr(0, e.target.value.length) +
                        '</b></span>' +
                        b.title.substr(e.target.value.length) +
                        '</pre></li>';
                ('</li>');
            });
            suggestionsUl.innerHTML = html;
        } else {
            textInput.style.borderBottomLeftRadius = '10px';
            textInput.style.borderBottomRightRadius = '10px';
            suggestions.style.display = 'none';
        }
    });
});
