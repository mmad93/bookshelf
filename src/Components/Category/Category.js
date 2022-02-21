import "./Category.css";
import BookCard from "../BookCard/BookCard";

export const Category = ({ books, shelf, setBooks }) => {
  return (
    <>
      <h2>{shelf}</h2>
      <div className="allCardsWrapper">
        <BookCard books={books} setBooks={setBooks} />
      </div>
    </>
  );
};

export default Category;
