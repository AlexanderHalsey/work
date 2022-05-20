
export default function (jobData = [], action) {
  if (action.type == 'saveJobTitle') {
    let newJobData = [...jobData, { jobTitle: action.newJob,skills:action.newSkills }]
    return newJobData
  } else if (action.type == 'saveSkill') {
    // action.newSKill should look like this
    // {skillName: "Developpeur Web", skillExperience : 3, skillLevel: 2}

    let newJobData = [...jobData]
    newJobData.skills.push(action.newSkill)
    return newJobData
  } else {
    return jobData
  }
}


