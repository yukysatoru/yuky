const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const twitch = require('./twitch');
const youtube = require('./youtube');
const kick = require('./kick');
const tiktok = require('./tiktok');
const facebook = require('./facebook');

app.use(cors());

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

app.get('/avatar/:platform/:username', async (req, res) => {
  const { platform, username } = req.params;
  try {
    let url;
    switch (platform) {
      case 'twitch':
        url = await twitch.getAvatar(username);
        break;
      case 'youtube':
        url = await youtube.getAvatar(username);
        break;
      case 'kick':
        url = await kick.getAvatar(username);
        break;
      case 'tiktok':
        url = await tiktok.getAvatar(username);
        break;
      case 'facebook':
        url = await facebook.getAvatar(username);
        break;
      default:
        return res.status(400).json({ error: 'Plataforma no soportada' });
    }
    res.json({ avatar: url });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener avatar' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});