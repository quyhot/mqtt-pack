const {client, publish, subscribe} = require('./mqtt')()
const test = (topic, payload) => {
    try {
        console.log('Received Message:', topic, payload.toString())
    } catch (e) {
        console.error(e)
    }
}

subscribe(test)