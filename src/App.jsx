/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from 'flowbite-react';
// import { Link } from 'react-router-dom';
import Cards from './pages/Cards';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {!showForm ? (
        <Button to="/forms" onClick={toggleForm}>
          Add New Book
        </Button>
      ) : null}
      <Cards/>
    </div>
  );
};

export default App;
