const express = require('express')
const router = express.Router()
const skillsCtrl = require("../controllers/skills")
// const skillDb = require("../models/skill")

/* GET skills listing. */
router.get('/', skillsCtrl.index)
router.post('/', skillsCtrl.create) // add this route
router.get('/new', skillsCtrl.new)
router.put('/', skillsCtrl.update)
router.delete('/:id', skillsCtrl.delete)
router.get("/:id", skillsCtrl.show)


module.exports = router;

