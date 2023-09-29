const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const fs = require('fs');

router.post('/registro', async (req, res) => {
  try {
    const { username, password, permissions } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = {
      username,
      password: hashedPassword,
      permissions,
    };

    let users = [];
    try {
      const data = await fs.promises.readFile('users.json', 'utf8');
      users = JSON.parse(data);
    } catch (error) {
    }

    users.push(user);

    await fs.promises.writeFile('users.json', JSON.stringify(users));

    res.status(201).json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
