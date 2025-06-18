import React from 'react';

function Message({ text }) {
  return (
    <p style={{ fontSize: '1.2rem', marginTop: '20px', fontWeight: 'bold' }}>
      {text}
    </p>
  );
}

export default Message;
