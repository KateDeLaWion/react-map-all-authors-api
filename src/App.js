import React, { Component} from 'react';
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.state= {
      items:null,
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2&limit=20')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        items: result
      });
    });
    
      
  }
  render() {
    const {  isLoaded, items } = this.state;
     if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.author} 
              <img src={item.download_url} />
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default App;




















