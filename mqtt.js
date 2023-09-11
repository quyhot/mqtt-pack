module.exports = () => {
    const mqtt = require("mqtt");
    const {mqttConfig, clientConfig} = require('./config')
    const {protocol, host, port, username, password} = mqttConfig
    const {clientId, qos, topic} = clientConfig
    const createMQTTUrl = (mqttConfig) => {
        return `${protocol}://${host}:${port}/mqtt`
    }

    const connect = () => {
        const options = {
            clientId,
            clean: false,
            connectTimeout: 4000,
            /**
             * By default, EMQX allows clients to connect without authentication.
             * https://docs.emqx.com/en/enterprise/v4.4/advanced/auth.html#anonymous-login
             */
            username,
            password,
            reconnectPeriod: 1000,
            // Enable the SSL/TLS, whether a client verifies the server's certificate chain and host name
            rejectUnauthorized: false,
            // for more options and details, please refer to https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options
        }
        return mqtt.connect(createMQTTUrl(mqttConfig), options)
    }

    const client = connect(clientConfig)
    // client.on('connect', (mqttConfig, clientConfig) => {
    //     console.log(`${protocol}: Connected`)
    //     client.subscribe(topic, {qos: +qos}, (error) => {
    //         if (error) {
    //             console.log('subscribe error:', error)
    //             return
    //         }
    //         console.log(`${protocol}: Subscribe to topic '${topic}'`)
    //     })
    //     // mediator.emit()
    // })
    client.subscribe(topic, {qos: +qos}, (error) => {
        if (error) {
            console.log('subscribe error:', error)
            return
        }
        console.log(`${protocol}: Subscribe to topic '${topic}'`)
    })
    const publish = (payload) => {
        client.publish(topic, payload, {qos: +qos}, (error) => {
            if (error) {
                console.error(error)
            }
            console.log('okeeeee')
        })
    }

    const subscribe = (callback) => {
        client.on("message", callback)
    }

    return {
        client, publish, subscribe
    }
}

