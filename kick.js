const fetch = require('node-fetch');
exports.getAvatar = async (username) => {
  const res = await fetch(`https://kick.com/api/v1/channels/${username}`);
  const data = await res.json();
  return data.user.profile_pic;
};
