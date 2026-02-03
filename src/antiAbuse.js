function isAllowedEntry(user, entries) {
    return !entries.has(user);
}

module.exports = { isAllowedEntry };