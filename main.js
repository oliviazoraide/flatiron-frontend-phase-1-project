console.log("connected")
//Variables for code:
const button = document.querySelector('#new-book');
const bookTitle = document.querySelector('.book-title');
const authorName = document.querySelector('.author-name');
const genreSelector = document.querySelector('#select-genre')


//Event Listeners:
//button.addEventListener('click', generateRandomBook)

//Callback Functions:
getGenre();
function getGenre() {
    fetch("https://readers-block.onrender.com/books")
    .then(r => r.json())
    .then(books => books.forEach(books => books["genre"]))
    .catch(error => alert(error))
}





//function generateRandomBook()
//Fetch: