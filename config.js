const mqttConfig = {
    protocol: process.env.MQTT_PROTOCOL || 'ws',
    port: process.env.MQTT_PORT || 8083,
    host: process.env.MQTT_HOST || '127.0.0.1',
    username: process.env.MQTT_USERNAME || '1',
    password: process.env.MQTT_PASSWORD || 'a'
}
const clientConfig = {
    clientId: 'carpla_' + Math.random().toString(16).substring(2, 8),
    topic: process.env.MQTT_TOPIC || 'user/*',
    qos: process.env.MQTT_QOS || 1
}
module.exports = {
    mqttConfig,
    clientConfig
}