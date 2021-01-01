import { useState, useEffect } from 'react';
import { searchVideos } from '../lib/api';

export default function Search() {
  const [term, setTerm] = useState('programming');
  const [videos, setVideos] = useState([]);

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
