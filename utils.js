

  
const welcomeMessage = "222Welcome to IBM Cloud DevOps using containers. Let\'s go use the Continuous Delivery Service";
const portMessage = "222Application Running on port";

const getWelcomeMessage = () => {
    return welcomeMessage;
};

const getPortMessage = () => {
    return portMessage;
};

exports.getWelcomeMessage = getWelcomeMessage;
exports.getPortMessage = getPortMessage;