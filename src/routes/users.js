const express = require('express');
const router = express.Router();

router.get('/users/singin', (req, res) => {
    res.render('users/singin');
});

router.get('/users/singup', (req, res) => {
    res.render('users/singup');
});

router.post('/users/singup', (req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (name <= 0 ) {
        errors.push({text: 'Nombre es requerido'});
        console.log('Nombre es requerido');
    }
    if (email <= 0 ) {
        errors.push({text: 'email es requerido'});
        console.log('email es requerido');
    }
    if (password <= 0 ) {
        errors.push({text: 'password es requerido'});
        console.log('password es requerido');
    }
    if ( password != confirm_password ) {
        errors.push({text: 'Pasword no coinciden'});
        console.log('Pasword no coinciden');
    }
    if ( password.length < 4 ) {
        errors.push({text: 'Pasword deb ser moyor de 4 digitos'})
        console.log('Pasword deb ser moyor de 4 digitos');
    }
    if ( errors.length > 0 ) {
        res.render('users/singup', { errors, name, email, password, confirm_password });
    } else {
        res.send('ok');
    }
    
});

module.exports = router;