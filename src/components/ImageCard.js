import React from 'react';
import ImageList from './ImageList';

class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.state = { spans: 0 }
    this.imageRef = React.createRef();
  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans })
  } 
  render(){
    const { description, urls } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img 
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard

// Let the ImageCard render itself and its image
// Reach into the DOM and figure out the height of the image
// Set the image height on state to get the component to rerender
// When rerendering, assign a 'grid-row-end' to make suret he image takes up the appropriate space.

// React Refs
// Gives access to single DOM element
// We create refs in the constructor, assign them to instance variable, then pass to a particular JSX element as props

// the ref itself is a JS object that has a current property. The current property references s DOM node, in this case the img. On this img obj we have a clientHeight property.