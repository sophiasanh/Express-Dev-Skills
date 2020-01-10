const Skill = require("../models/skill");

const index = (req, res) => {
    res.render("skills/index", {
        skills: Skill.getAll(),
    })
}

const show = (req, res) => {
    res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    id: req.params.id,
    skillNum: parseInt(req.params.id) + 1
    })
}

const create = (req, res) => {
    console.log(req.body)
	req.body.done = false
	Skill.create(req.body)
	res.redirect('/skills') 
}

const newSkill = (req, res) => {
    res.render('skills/new')
}

const update = (req, res) => {
	Skill.update(req.params.id, req.body.skill)
	res.redirect('/skills')  
}

const deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

module.exports = {
    index,
    show,
    create,
    new: newSkill,
    update,
    delete: deleteSkill,
};