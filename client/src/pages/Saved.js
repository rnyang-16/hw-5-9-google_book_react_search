import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SavedBookCards from "../components/SavedBookCards";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Header page="saved" custom="navbar-expand-lg bg-dark" />
      <Main name='Saved'>
        <DataAreaContext.Provider
          value={{ books, deleteBook }}
          >
          <SavedBookCards />
        </DataAreaContext.Provider>
      </Main>
      <Footer />
    </div>
  );
};

export default Saved;
