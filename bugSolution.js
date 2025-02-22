```javascript
// bugSolution.js
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  const buttonClasses = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${hovered ? 'bg-blue-600' : ''}`;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className={buttonClasses}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
```