const fetch = require('node-fetch');
exports.getAvatar = async (username) => {
  return `https://static-cdn.jtvnw.net/jtv_user_pictures/${username}-profile_image-70x70.png`;
};
