import React, { Component } from 'react';


class Search extends Component {
    
    
    constructor() {
        super();
        this.state = {
        bookList: [],
        }
    }

    render() {
        return(
            <div className="book-search-container">
                <h1>Book Finder</h1>
                <input></input>
                <button>Find</button>
            
            </div>
        )
    }

}

export default Search;