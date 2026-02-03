const { listenToChat } = require('./chatListener');
const { isAllowedEntry } = require('./antiAbuse');
const { log } = require('./logger');

async function startGiveaway(config) {
    const entries = new Set();
    const startTime = Date.now();

    listenToChat((user, message) => {
        if (Date.now() - startTime > config.durationMs) return;
        if (message === config.entryCommand && isAllowedEntry(user, entries)) {
            entries.add(user);
            log(`Entry accepted from ${user}`);
        }
    });

    await new Promise(resolve => setTimeout(resolve, config.durationMs));

    const winners = Array.from(entries).slice(0, config.maxWinners);
    winners.forEach(w => log(`Winner selected: ${w}`));
}

module.exports = { startGiveaway };