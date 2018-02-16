const utils = require('./utils');

const withSizzelSelectorEngine = () => {
    const Sizzle = require('sizzle');

    utils.querySelectorAll = function querySelectorAll(css) {
        return Sizzle(css, this);
    };
};

module.export = withSizzelSelectorEngine();
