const router = require('express').Router;
const bcrypt = require('bcryptjs/dist/bcrypt');

router.post('registrarse', async (req, res) => {
    try {

        // npm install bcryptjs para encriptar
        req.body.password = bcrypt.hashSync(req.body.password, 12);

        //User es un modelo para Mongose
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({error: error.message });
    }
});

module.exports = router;