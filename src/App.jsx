import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  // console.log(index);

  // const checkNumber = (number) => {
  //   if (number > reviews.length - 1) {
  //     return number - reviews.length;
  //   } else if (number < 0) {
  //     return reviews.length - 1;
  //   }

  //   return number;
  // };

  // const prevPerson = () => {
  //   console.log(index);
  //   setIndex((oldValue) => {
  //     return checkNumber(oldValue - 1);
  //   });
  // };

  // const nextPerson = () => {
  //   console.log(index);
  //   setIndex((oldValue) => {
  //     return checkNumber(oldValue + 1);
  //   });
  // };

  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * reviews.length);
  //   if (randomNumber === index) {
  //     randomNumber += 1;
  //   }

  //   setIndex(checkNumber(randomNumber));
  // };

  const prevPerson = () => {
    setIndex((old) => {
      return (old - 1 + reviews.length) % reviews.length;
    });
  };
  const nextPerson = () => {
    setIndex((old) => {
      return (old + 1) % reviews.length;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber += 1;
    }
    setIndex(randomNumber % reviews.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
