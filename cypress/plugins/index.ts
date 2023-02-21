module.exports = (on: (arg0: string, arg1: any) => void, config: any) => {
    require('@cypress/code-coverage/task')(on, config);
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
    return config;
};
