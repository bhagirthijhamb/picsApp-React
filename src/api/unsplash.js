import axios from 'axios';

// create method creates a instance of the axios client with a couple of defaulted properties
// axios.create allows us to create a customised copy of it that is customised to just making request to some specific url with specifc headers.
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID I3-4CZRBsPwTlUUqjaBQZfPyBSwP3XEi5xcSXXSyArM'
  }
})