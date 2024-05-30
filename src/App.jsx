import React, { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0);
  
  console.log(count);
  return (
    <div>
      <p className="text-3xl font-bold underline bg-slate-800 text-slate-300">
        Hello Word
      </p>
    </div>
  );
};

export default App;
