import React from 'react';

const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: 'black',
  color: 'white',
  padding: '20px',
  textAlign: 'center'
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div>&copy; 2024 Your Company. All rights reserved.</div>
    </footer>
  );
}
