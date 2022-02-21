import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAll, get, update } from "../../Data/BooksAPI";
import Category from "../Category/Category";

const Home = () => {
  /**
   * STATES
   */
  const [AllBooks, setAllBooks] = useState(null);
  const [WantToRead, setWantToRead] = useState(null);
  const [CurrentlyReading, setCurrentlyReading] = useState(null);
  const [Read, setRead] = useState(null);

  /**
   * FETCHING DATA
   */
  useEffect(
    () =>
      getAll().then((books) => {
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const read = books.filter((book) => book.shelf === "read");
        return (
          setAllBooks(books),
          setWantToRead(wantToRead),
          setCurrentlyReading(currentlyReading),
          setRead(read)
        );
      }),
    []
  );

  // useEffect(()=> get("nggnmAEACAAJ").then(book => console.log(book, 'in oon ketabas k mikhaym')))

  AllBooks && console.log(AllBooks);

  return (
    <div>
      {WantToRead && (
        <Category
          books={WantToRead}
          setBooks={setWantToRead}
          shelf="I will read :"
        />
      )}
      {CurrentlyReading && (
        <Category
          books={CurrentlyReading}
          setBooks={setCurrentlyReading}
          shelf="I am currently reading :"
        />
      )}
      {Read && (
        <Category
          books={Read}
          setBooks={setRead}
          shelf="I have already read :"
        />
      )}
    </div>
  );
};

export default Home;
