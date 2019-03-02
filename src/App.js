



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookResult from './BookResult.js';
import Search from './Search.js';
import Unavailable from './unavailable-image.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      placeholder: "Enter term",
      bookList: [],
      classStyle: true,
    }
  }

  handleQuerySubmit = e => {
    e.preventDefault();
    var query = e.target.name.value;
    console.log(e.target.name.value);
    this.setState({ 
      query: query,
      classStyle: false,
     });
    var inputLength = query.length;

    console.log(this.state.query)

    if (inputLength === 0) {
      alert('please enter a query')
    } else if (inputLength !== 0) {
      // this.setState({ query });
      // console.log(this.state.query)
      this.getBooks(query);
      e.target.name.value = '';
    }
    
  }

  getBooks(query) {

    
    console.log(this.state.query);
    var fullURL = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&startIndex=0&maxResults=20&key=AIzaSyBMR9EuN0ZcSXWLLdEvH1Q60t92NoaE-KQ';
    console.log(fullURL);
    // this.setState({ query: search });
    fetch(`${fullURL}`)
      .then(results => {
        return results.json();
      }).then(data => {
        // console.log(data.items[0].volumeInfo);

        let bookList = data.items.map(book => {

          return (

            <div key={book.id} className="book-container">

              <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : Unavailable}></img>
              <div className="book-container-info">
                <div>
                  <div className="book-title-main"><h1>{book.volumeInfo.title}</h1></div>
                  <h3 className="book-authors"><span className="label">By:</span>
                        {book.volumeInfo.authors ? book.volumeInfo.authors.join(' & ') : "n/a" }
                  </h3>
                  <p className="book-publisher"><span className="label">Publisher:</span> {book.volumeInfo.publisher ? book.volumeInfo.publisher : "n/a"}</p>
                </div>
                <a href={book.volumeInfo.infoLink}><button>More</button></a>
              </div>
            </div>
          )
        })
        this.setState({ bookList });
        console.log(this.state.bookList)

      })
  }


  render() {
    return (
      <div className={this.state.classStyle ? `App stretch` : `App`}>  
        <Search
          handleQuerySubmit={this.handleQuerySubmit}
          handleChange={this.handleChange}
          query={this.state.query}
          placeholder={this.state.placeholder}
          classStyle={this.state.classStyle}
        />
        <BookResult
          query={this.state.query}
          bookList={this.state.bookList}
          classStyle={this.state.classStyle}
        />
      </div>
    );
  }
}

export default App;


// <h3 className="book-authors"><span className="label">By:</span>
//                         {book.volumeInfo.authors ? (
//                       book.volumeInfo.authors.map(author => {
//                         return (
//                           ((book.volumeInfo.authors.indexOf(author)) === (book.volumeInfo.authors.length - 2)) ?
//                             (author + ' & ') : (author)
//                         )
//                       })
//                         ) : "n/a"
//                     }
//                   </h3>