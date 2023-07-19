// api/ip-check.js
module.exports = (req, res) => {
  const allowedIP = process.env.ALLOWED_IP; // 从环境变量中读取允许访问的 IP 地址

  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (clientIP === allowedIP) {
    res.status(200).send('Access granted.'); // 允许访问
  } else {
    res.status(403).send('Access denied.'); // 拒绝访问
  }
};
