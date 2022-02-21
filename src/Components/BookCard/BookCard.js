import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "../../Data/BooksAPI";
import "./BookCard.css";

const BookCard = ({ books, setBooks }) => {
    
  return books.map((book) => (
    <div className="card" id={book.id}>
      <img
        className="cardImage"
        src={book.imageLinks.thumbnail}
        alt={book.title}
      />
      <div className="cardTitleWrapper">
        <p className="cardTitle">{book.title}</p>
      </div>
    </div>
  ));
};

export default BookCard;
