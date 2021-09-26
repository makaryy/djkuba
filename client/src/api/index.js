import axios from 'axios'

export const sendMessage = (message) => axios.post('https://djkuba.herokuapp.com/send', message)