exports.getAvatar = async (username) => {
  return `https://graph.facebook.com/${username}/picture?type=large`;
};
