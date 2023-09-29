const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const fs = require('fs/promises');

const secret = process.env.JWT_SECRET;
const secret2 = process.env.JWT_SECRET2;

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const data = await fs.readFile('users.json', 'utf8');
    const users = JSON.parse(data);

    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    let selectedSecret = secret; 

    if (user && user.permissions === 'admin') {
      selectedSecret = secret;
    } else if (user && user.permissions === 'dece') {
      selectedSecret = secret2;
    }

    const token = jwt.sign(
      {
        username: user.username,
        exp: Date.now() + 14400 * 1000,
      },
      selectedSecret 
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
