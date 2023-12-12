import { useState } from 'react';
import './App.css';

function App() {
  const[quote, setQuote]=useState("Be yourself; everyone else is already taken.");
  const[author, setAuthor]=useState("Anonymous");
  async function getQuotes(){
const response= await fetch("https://api.quotable.io/random");
const data = await response.json();
setQuote(data.content)
setAuthor(data.author)
  }
  return (
     <div id="container">
        <header>
            <h1>Random Quote Generator</h1>
        </header>
        <div class="quote-container">
            <div class="quote-box">
                <p id="quote">"{quote}”</p>
                <small id="author">-{author}</small>
            </div>
            <button onClick={getQuotes} id="button">Generate</button>
        </div>
    </div>
  );
}

export default App;
