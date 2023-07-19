// main.js

// 存储密码和设备的映射关系
const passwordDeviceMap = {};

// 检查密码和设备的映射关系
function checkPasswordDeviceMapping(password, device) {
  const storedDevice = passwordDeviceMap[password];

  if (!storedDevice) {
    passwordDeviceMap[password] = device;
    localStorage.setItem('passwordDeviceMap', JSON.stringify(passwordDeviceMap));
    return true; // 允许登录
  }

  if (storedDevice === device) {
    return true; // 允许登录
  }

  return false; // 拒绝登录
}

// 处理登录逻辑
function handleLogin() {
  const password = 'password'; // 替换为实际的密码
  const device = 'device1'; // 替换为实际的设备标识

  const allowed = checkPasswordDeviceMapping(password, device);

  if (allowed) {
    // 允许登录
    // 执行登录操作
  } else {
    // 拒绝登录
    // 提示用户设备已登录
  }
}

// 在页面加载时从本地缓存中恢复密码和设备的映射关系
const storedMap = localStorage.getItem('passwordDeviceMap');
if (storedMap) {
  passwordDeviceMap = JSON.parse(storedMap);
}

// 调用登录处理函数
handleLogin();
