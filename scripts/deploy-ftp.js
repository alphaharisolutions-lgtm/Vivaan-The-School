const path = require('path');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const server = process.env.FTP_SERVER;
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;

if (!server || !user || !password) {
  console.error('Error: FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD environment variables are missing!');
  process.exit(1);
}

const config = {
  user: user.trim(),
  password: password.trim(),
  host: server.trim().replace(/^ftp:\/\//, ''),
  port: 21,
  localRoot: path.join(__dirname, '../dist'),
  remoteRoot: '/public_html/',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true,
  sftp: false
};

console.log(`Starting Hostinger FTP deployment to ${config.host}...`);

ftpDeploy
  .deploy(config)
  .then(res => {
    console.log('Successfully deployed all build files to Hostinger public_html!');
  })
  .catch(err => {
    console.error('FTP Deployment Failed:', err);
    process.exit(1);
  });
