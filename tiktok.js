const fetch = require('node-fetch');
exports.getAvatar = async (username) => {
  const res = await fetch(`https://www.tiktok.com/@${username}`);
  const text = await res.text();
  const match = text.match(/"avatarLarger":"(.*?)"/);
  return match ? match[1].replace(/\u0026/g, '&') : null;
};
