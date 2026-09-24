import React from 'react';
import Register from './pages/register';
import GlobalStyle from './styles/global'; // se criar

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Register />
    </>
  );
};

export default App;