// Each item in the list should include the book's author, title, and publishing company, as well as a picture of the book.
// From each list item, you should also be able to navigate to more information about the book

import React, { Component } from 'react';

var APIkey = 'AIzaSyBMR9EuN0ZcSXWLLdEvH1Q60t92NoaE-KQ';
var url = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
var fullURL = url + '&key=' + APIkey;


class BookResult extends Component {
    
    
    constructor() {
        super();
        this.state = {
        bookList: [],
        }
    }

    componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=quilting&key=AIzaSyBMR9EuN0ZcSXWLLdEvH1Q60t92NoaE-KQ')
    .then(results => {
        return results.json();
    }).then(data => {
        console.log(data.items[0].volumeInfo);
        let bookList = data.items.map(book => {
            
            return (
                <div key={book.volumeInfo.title} className="book-container">
                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: 'No Image Available'}></img>

                    <h1 className="book-title-main">{book.volumeInfo.title}</h1>
                    <h3 className="book-authors">By:  {book.volumeInfo.authors}</h3>
                    <p className="book-publisher">Publisher: {book.volumeInfo.publisher}</p>
                    <a href={book.volumeInfo.infoLink}><button>More</button></a>
                
                </div>
                )
            })
        this.setState({bookList});
        console.log(this.state.bookList)

        }) 
    }
    

    render() {
        return(
            <div className="book-list-container">
                {this.state.bookList}
            </div>
        )
    }

}

export default BookResult;

