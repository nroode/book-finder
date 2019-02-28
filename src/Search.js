// Enter a query in a search box
// Display a list of books matching the given query.

import React, { Component } from 'react';


class Search extends Component {
    

    render() {
        return(
            <div className={this.props.classStyle ? `book-search-container book-bk-cover list-bk-cover` : `book-search-container`}>
                <h1>Book Finder</h1>

                <form onSubmit={ (e) => this.props.handleQuerySubmit(e)}>
                    <input type="text" name="name" placeholder={this.props.placeholder} autoFocus={true}></input>
                    <button>Find</button>
                </form>
                
            
            </div>
        )
    }

}

export default Search;
