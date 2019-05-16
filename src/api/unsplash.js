import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d0114aa76cf7cf96ab15d65f3396c7bbe6d36c7c07c33bf07e0a191e6cc8fdcb'
      }
})