const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const btn = document.getElementById('btn')
const bookList = document.getElementById('book-list')

btn.addEventListener('click', function(event){
    event.preventDefault()

    if(title.value == '' || author.value == '' || year.value == '') {
        
        alert('Please provide value')
        
    } else {
        
        // create row element
        let row = document.createElement('tr')
        row.className = 'rowClass'
        
        // create Title element or th element
        let newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        row.appendChild(newTitle)

        // create author element or th element
        let newAuthor = document.createElement('th')
        newAuthor.innerHTML = author.value
        row.appendChild(newAuthor)

        // create year element or th element
        let newYear = document.createElement('th')
        newYear.innerHTML = year.value
        row.appendChild(newYear)

        // finale append all new elements 
        bookList.appendChild(row)

        // call clear function. all input filed empty
        clear()
    }
    
})

function clear () {
    title.value = ''
    author.value = ''
    year.value = ''
}



