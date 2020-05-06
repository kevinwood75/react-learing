import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Ticker</th>
            <th scope="col">Price</th>
            <th scope="col">Volume</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>   
          {contacts.map((contact) => (
            <tr>
              <th scope="row">{contact.ticker}</th>
              <td>${contact.price}</td>
              <td>{contact.volume}</td>
              <td>{contact.stock_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Contacts
