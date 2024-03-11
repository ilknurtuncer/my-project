/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Button, Select, Label, TextInput } from 'flowbite-react';


function Form() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: ''
  });
  // eslint-disable-next-line no-unused-vars
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(book);
  };


  return (
    <div>
    <h2>Add New Book</h2>
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block hover:border-x-cyan-600">
          <Label htmlFor="bookname" value="Book Name" />
        </div>
        <TextInput id="bookname" type="bookname" placeholder="Book Name" required shadow />
      </div>
      <div>
        <div className="mb-2 block hover:border-x-cyan-600">
          <Label htmlFor="authorname" value="Author Name" />
        </div>
        <TextInput id="authorname" type="Author Name" placeholder="Author Name"  required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="ısbn" value="ISBN" />
        </div>
        <TextInput id="ısbn" type="ısbn" placeholder="ISBN"  required shadow />
      </div>
      <div>
          <div className="mb-2 block hover:border-x-cyan-600">
        <Label htmlFor="publishedyear" value="Published Year" placeholder="Published Year"  required shadow  />
      </div>
      <Select id="countries" required>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
      </Select>
    
      </div>
      <div>
        <div className="mb-2 block hover:border-x-cyan-600">
          <Label htmlFor="type" value="Type" />
        </div>
        <TextInput id="type" type="type" placeholder="Type"  required shadow />
      </div>
      <p className=' text-white'>Birden fazla seçenek varsa slash ile ayırabilirsiniz.</p>
      <div>
        <div className="mb-2 block hover:border-x-cyan-600">
          <Label htmlFor="cover photo" value="Cover Photo" />
        </div>
        <TextInput id="cover photo2" type="cover photo" placeholder="Cover Photo" required shadow />
      </div>
      
      <Button className=' bg-sky-700 text-white' type="submit">SAVE BOOK</Button>
    </form>
    </div>
  );
}

    


export default Form;