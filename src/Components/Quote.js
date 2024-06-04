import React, { useState } from 'react'
// import React from 'react'
import '../App.css'

const Quote = () => {
  const [quote, setquote]=useState();
  const quotes = [
    "The only way to do great work is to love what you do. Steve Jobs",
    "Innovation distinguishes between a leader and a follower. Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. Steve Jobs",
  ];
 const generateRandomQuote = () =>{
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  setquote(randomQuote);
 }
  return (
    <div>
      <h1>Random Quote Generator</h1>
    <p>{quote}</p>
      <button onClick={generateRandomQuote}>Generate</button>
    </div>
  )
}

export default Quote
