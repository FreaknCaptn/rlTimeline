var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

const user = process.env.rlTimelineFTPuser;
const password = process.env.rlTimelineFTPpassword;
const host = process.env.rlTimelineFTPhost;

console.log('user', user);
console.log('password', password);
console.log('host', host);

if (!user || !password || !host) {
    return;
}

const config = {
    user: user,
    password: password,
    host: host,
    port: 21,
    localRoot: "../dist/rl-timeline",
    remoteRoot: "/public_html/temp/",
    include: ["*", "**/*"],
    deleteRemote: true,
    forcePasv: true
};

ftpDeploy.deploy(config, function (err, res) {
    if (err) console.log(err);
    else console.log("finished:", res);
});