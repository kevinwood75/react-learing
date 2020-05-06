import React from 'react'

const Markets = ({ markets }) => {
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
          {markets.map((market) => (
            <tr>
              <th scope="row">{market.ticker}</th>
              <td>${market.price}</td>
              <td>{market.volume}</td>
              <td>{market.stock_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Markets
