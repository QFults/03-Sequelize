const router = require('express').Router()
const { Owner, Pet } = require('../models')

router.get('/owners', (req, res) => {
  Owner.findAll({ include: [Pet] })
    .then(owners => res.json(owners))
    .catch(err => console.log(err))
})

router.post('/owners', (req, res) => {
  Owner.create(req.body)
    .then(owner => res.json(owner))
    .catch(err => console.log(err))
})

router.put('/owners/:id', (req, res) => {
  Owner.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/owners/:id', (req, res) => {
  Owner.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router