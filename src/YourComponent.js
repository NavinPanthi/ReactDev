import React, { useRef, useState, useEffect } from 'react';

const YourComponent = () => {
  const divRef = useRef(null); // Create a ref for the div element
  const [isDivFocused, setIsDivFocused] = useState(false); // State variable to track focus

  useEffect(() => {
    const handleFocus = () => {
      setIsDivFocused(true);
    };

    const handleBlur = () => {
      setIsDivFocused(false);
    };

    const divElement = divRef.current;
    divElement.addEventListener('focus', handleFocus);
    divElement.addEventListener('blur', handleBlur);

    // Clean up the event listeners on component unmount
    return () => {
      divElement.removeEventListener('focus', handleFocus);
      divElement.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div>
      {/* Ref is assigned to the div element */}
      <div ref={divRef} tabIndex="0">
        Click or press Tab to focus me
      </div>
      {isDivFocused ? <p>The div is focused!</p> : <p>The div is not focused.</p>}
    </div>
  );
};

export default YourComponent;
