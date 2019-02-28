// Each item in the list should include the book's author, title, and publishing company, as well as a picture of the book.
// From each list item, you should also be able to navigate to more information about the book

import React, { Component } from 'react';

var APIkey = 'AIzaSyBMR9EuN0ZcSXWLLdEvH1Q60t92NoaE-KQ';
var url = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
var fullURL = url + '&key=' + APIkey;



class BookResult extends Component {
    
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     bookList: [],
    //     search: ''
        
    //     }
    // }

    

    
    

    render() {
        
        return(
            <div className="book-list-container">
                {this.props.bookList}

            </div>
        )
    }

}

export default BookResult;

