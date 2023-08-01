console.log("connected")
//Variables for code:
const button = document.querySelector('#new-book');
const bookTitle = document.querySelector('.book-title');
const authorName = document.querySelector('.author-name');
const genreSelector = document.querySelector('#select-genre')
const uniqueGenres = new Set()


//Event Listeners:
//button.addEventListener('click', generateRandomBook)

//Callback Functions:
getGenre();
function getGenre() {
    fetch("https://readers-block.onrender.com/books")
    .then(r => r.json())
    .then(books => renderGenreOption(books))
    .catch(error => alert(error))
}

function renderGenreOption(books) {
    books.forEach(book => {
        if(!uniqueGenres.has(book.genre)) {
            uniqueGenres.add(book.genre)
        
        const option = document.createElement("option")
        option.value = book.genre
        option.textContent = book.genre
        genreSelector.append(option)
        }
    })
    
}






//function generateRandomBook()
//Fetch: