

export const getBridge = hue => {
    return hue.getBridges().then(bridges => bridges[0]);
};

export const authenticate = (hue, bridge) => hue.auth(bridge);
