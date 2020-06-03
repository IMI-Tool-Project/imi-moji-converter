const moji = require("moji");

module.exports = {
  toHalfWidth: function(full) {
    return moji(full).convert('ZE', 'HE').convert('ZS', 'HS').convert('ZK', 'HK').toString();
  },
  toFullWidth: function(half) {
    return moji(half).convert('HE', 'ZE').convert('HS', 'ZS').convert('HK', 'ZK').toString();
  }
};
