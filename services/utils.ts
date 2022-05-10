export const log = (...params: any[]) => {
    console.group(`%c${params[0]}`, `color:${typeof params[0]}; font-weight:bold`);
    for (let i = 1; i < params.length; i++) {
        let param = params[i];
        let type = typeof param;

        if (typeof param === 'object') {
            console.dir(param);
        } else {
            console.log(`%c${param}`, `color:${colors[type]}; font-weight:bold`);
        }
    }

    console.groupEnd();
};
