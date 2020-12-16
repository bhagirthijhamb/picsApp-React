import React from 'react';

class SearchBar extends React.Component{
  state = { term: '' };
  
  // onInputChange(e){
  //   console.log(e.target.value);
  // }

  onFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.term);
  }

  render(){
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            {/* callback is passed to the input onChange prop as an arrow function */}
            <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;