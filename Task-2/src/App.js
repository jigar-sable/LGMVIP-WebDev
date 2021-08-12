import React from 'react';
import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Hero from './Components/Hero/Hero';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const fetchUsers = async () => {
    setisBtnClick(true);
    const response = await fetch('https://reqres.in/api/users');
    const res = await response.json();
        // console.log(res)
        setUsers(res.data);
        setInterval(() => {
          setisDataFetch(true);
        }, 1500);
  };

  return (
    <>
        <Navbar fetchUsers={fetchUsers}/>   

            {isBtnClick ? (
              isDataFetch ? (
                <Card users={users} />
              ) : (
                  <Loader/>
              )
            ) : (
              <Hero/>
            )}
    </>
  );
}

export default App;