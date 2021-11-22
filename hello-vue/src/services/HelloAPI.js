// Provides service to the Vue app (pulling data from API/making requests to Express server)

import axios from 'axios'

let base = 'api'

// "export default": means provide what's in the brackets (in this case the function getHelloMessage)
// axios call: Makes get request to /api. Also converts response to JSON.
export default {
    getHelloMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}