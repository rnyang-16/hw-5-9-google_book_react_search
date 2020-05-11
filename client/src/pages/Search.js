import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SearchBookCards from "../components/SearchBookCards";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

function Search() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    search: "",
  })

  // save book to DB
  function handleSaveBook(book) {
    console.log(book);
    API.saveBook({
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.image,
      link: book.link
    })
    .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleSearchInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // search for the query in Google books
  function handleSearchSubmit(event) {
    event.preventDefault();
    API.searchBooks(formObject.search)
      .then(res => {
          // setBooks(res.data)
          // console.log(res.data)
          let books = [];
          for (var i=0; i<res.data.items.length; i++) {
            let book = {
              "authors": res.data.items[i].volumeInfo.authors,
              "description": res.data.items[i].volumeInfo.description,
              "image": res.data.items[i].volumeInfo.imageLinks.thumbnail,
              "link": res.data.items[i].volumeInfo.infoLink,
              "title": res.data.items[i].volumeInfo.title
            };
            books.push(book);
          }
          console.log(books)
          setBooks(books);
        }
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Header page="search" custom="navbar-expand-lg bg-dark" />
      <Main name='Search'>
        <DataAreaContext.Provider
            value={{ handleSaveBook, handleSearchSubmit, handleSearchInputChange, formObject, books }}
            >
            <SearchBookCards />
        </DataAreaContext.Provider>
      </Main>
      <Footer />
    </div>
  );
};

export default Search;
