const { log } = require('./logger');

function listenToChat(onMessage) {
    log('Listening to Twitch chat messages');
    setInterval(() => {
        const simulatedUser = `user_${Math.floor(Math.random() * 1000)}`;
        onMessage(simulatedUser, '!enter');
    }, 1500);
}

module.exports = { listenToChat };