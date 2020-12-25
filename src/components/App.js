import React from 'react';
import SearchBar from './Searchbar'
import unsplash from './../api/unsplash';
import ImageList from './ImageList';
import axios from 'axios';

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    console.log(term);
    // axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID I3-4CZRBsPwTlUUqjaBQZfPyBSwP3XEi5xcSXXSyArM'
    //   }
    // }).then(response => { console.log(response.data.results)})

    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })
    // console.log(response.data.results);
    this.setState({ images: response.data.results })
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {/* Found: {this.state.images.length} images */}
      </div>
    )
  }
}

export default App;