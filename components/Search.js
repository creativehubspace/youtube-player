import { useState, useEffect } from 'react';

export default function Search() {
  const [term, setTerm] = useState('programming');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search video:</label>
        <input
          type="text"
          name="search"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
