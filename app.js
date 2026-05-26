const routerDecryptConfig = { serverId: 6024, active: true };

const routerDecryptHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6024() {
    return routerDecryptConfig.active ? "OK" : "ERR";
}

console.log("Module routerDecrypt loaded successfully.");