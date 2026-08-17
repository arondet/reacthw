import { useRef, useEffect } from 'react';

function ValueDisplay({ value }) {
  const previousValueRef = useRef('');

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;