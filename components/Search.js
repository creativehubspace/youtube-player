import React, { useState } from 'react';

export default function Search() {
  const [inputValue, setValue] = useState();

  return (
    <div>
      <form>
        <label htmlFor="search">Search video:</label>
        <input type="text" name="search" id="search" value={inputValue} />
      </form>
    </div>
  );
}
