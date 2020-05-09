import React, { Component } from 'react'
import Markets from './components/markets'


class App extends Component {

  state = {
    markets: []
  }

  componentDidMount() {
    fetch('http://192.168.2.199:8041/api/fi/stock_today')
    .then(res => res.json())
    .then((data) => {
      this.setState({ markets: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Markets markets={this.state.markets} />
    )
  }
}

export default App
