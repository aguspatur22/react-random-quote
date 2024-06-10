import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * 100);
  const g = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  return `rgb(${r},${g},${b})`;
};

const transition = "all 0.7s ease-in-out";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());
  const [opacity, setOpacity] = useState<string>("1");

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor}}
        >
          <h2 id="text" style={{ opacity: opacity, transition }}>
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author" style={{opacity: opacity, transition}}>- {quote.author}</h4>
        </div>
        <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.quote}" - ${quote.author}`}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            style={{ backgroundColor: randomColor, transition }}
            onClick={() => {
              setOpacity("0");
              setTimeout(() => {
                setQuote(getRandomQuote());
                setRandomColor(getRandomColor());
                setOpacity("1");
              }, 700);
            }}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
          <p>
            by
            <a
              href="https://github.com/aguspatur22"
              target="_blank"
              rel="noreferrer"
            >Agustin Paturlanne</a>
          </p>
        </div>
    </div>
  );
}

export default App;
