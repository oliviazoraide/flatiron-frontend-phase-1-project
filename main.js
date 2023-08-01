console.log("connected")
//Variables for code:
const button = document.querySelector('#new-book');
const bookTitle = document.querySelector('.book-title');
const authorName = document.querySelector('.author-name');
const genreSelector = document.querySelector('#select-genre')
const uniqueGenres = new Set()


//Event Listeners:
genreSelector.addEventListener('change', getRandomBookByGenre)
button.addEventListener('click', generateRandomBook)

//Function calls:
getGenre();

//Functions:
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

function getRandomBookByGenre() {
    const selectedGenre = genreSelector.value 
    fetch("https://readers-block.onrender.com/books")
    .then(r => r.json())
    .then(books => {
        const filteredBooks = books.filter(book => book.genre === selectedGenre)
        if(filteredBooks.length === 0) {
            alert('No books found')
        }
        else {
            const randomFilteredBook = filteredBooks[Math.floor(Math.random() * filteredBooks.length)]
            displayBook(randomFilteredBook)
        }
    })
    .catch(error => alert(error))
}

function generateRandomBook() {
    fetch("https://readers-block.onrender.com/books")
    .then(r => r.json())
    .then(books => {
        const randomBookIndex = Math.floor(Math.random() * books.length)
        const randomBook = books[randomBookIndex]
        displayBook(randomBook)
    })
    .catch(error => alert(error))
}

function displayBook(book) {
    bookTitle.textContent = book.title
    authorName.textContent = book.author
}