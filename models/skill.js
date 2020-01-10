const skills = [
    { skill: "Killer HTML" },
    { skill: "CSS Queen" },
    { skill: "Ryan's Bugaboo" },
]

const getAll = () => {
    return skills;
}

const getOne = id => {
    return skills[id];
}

const create = (skill) => {
    skills.push(skill);
}

const deleteOne = id => {
    skills.splice(id, 1);
}

const update = (id, skill) => {
    skills[id].skill = skill
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
}
