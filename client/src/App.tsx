import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  console.log('React version:', React.version);
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
