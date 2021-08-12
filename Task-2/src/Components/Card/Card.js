import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='wrapper'>
      {props.users.map((user, id) => {
          const { avatar, first_name, lastname, email } = user;
        return (
          <div className='card' key={id}>
            <img src={avatar} alt='' className='avatar' />
            <div className='card-desc'>
              <h2>{first_name} {lastname}</h2>
              <p>{email}</p>              
              <a className='contactbtn' href={"mailto:"+email}> <i className="far fa-envelope"></i> Contact Me</a>
            </div>
          </div>     
        );
      })}
      </div>
  );
}