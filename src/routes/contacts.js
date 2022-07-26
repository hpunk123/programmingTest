const router = require('express').Router()
const { allContactsByAlpha,noMatchContact,matchContact,finfById,deleteById } = require('../controllers/contactsController')

router.get( '/',allContactsByAlpha )
router.get( '/noMatch/:nameNoMatch',noMatchContact )
router.get( '/match/:nameMatch',matchContact )
router.get( '/:id',finfById )
router.delete('/:id',deleteById )

module.exports = router