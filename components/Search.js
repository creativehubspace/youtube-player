import React, { useState } from 'react';

export default function Search() {
  const [inputValue, setValue] = useState();

  return (
    <div>
      <form>
        <input type="text" value={inputValue} />
      </form>
    </div>
  );
}
