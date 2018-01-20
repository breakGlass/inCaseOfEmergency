'use strict'
const router = require('express').Router();
const {
  Resources
} = require('../models');

//load all resources
router.get('/', (req, res, next) => {
  Resources.findAll()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
});

// get single resources by id
router.get('/:resourceId', (req, res, next) => {
  Resources.findById(req.params.resourceId)
    .then(resource => res.json(resource))
    .catch(next);
});

// get resources by type
router.get('/type/', (req, res next) => {
  Resources.findAll({
      where: req.query
    })
    .then(similarRes => res.json(similarRes))
    .catch(next);
})


//add resource
router.post('/', (req, res, next) => {
  Resources.create(req.body)
    .then(resource => res.status(201).json(resource))
    .catch(next);
});

//update resource
router.put('/:resourceId', (req, res, next) => {
  Resources.findById(req.params.userId)
    .then(resource => {
      resource.update(req.body)
        .then(newResource => res.json(newResource))
    })
    .catch(next)
});

// destroy resource
route.delete('/:resourceId', (req, res, next) => {
  Resources.findById(req.params.resourceId)
    .then(resource => resource.destroy()
      .then(() => res.sendStatus(204))
    )
    .catch(next);
});


module.exports = router;
