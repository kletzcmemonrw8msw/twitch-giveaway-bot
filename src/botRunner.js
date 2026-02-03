const { startGiveaway } = require('./giveawayEngine');
const config = require('../config/defaults.json');
const { log } = require('./logger');

async function run() {
    log('Starting Twitch giveaway session');
    await startGiveaway(config);
    log('Giveaway session ended');
}

run().catch(err => {
    console.error('Bot runner error:', err);
});