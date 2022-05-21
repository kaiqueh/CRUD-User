const { Router } = require('express');

const controler = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', controler.index);
router.get('/contacts/:id', controler.show);
router.delete('/contacts/:id', controler.delete);
router.post('/contacts', controler.store);
router.put('/contacts/:id', controler.update);

module.exports = router;
