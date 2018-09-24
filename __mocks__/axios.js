export default {
    get: () => Promise.resolve({data: 3}),
    post: (url, param) => {
        return new Promise(resolve => {
            let ln_return = param.one + param.two;
            resolve({data: ln_return});
        });
    }
};
