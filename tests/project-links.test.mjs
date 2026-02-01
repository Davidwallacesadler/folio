import assert from 'node:assert/strict'

import { workProjects } from '../mixins/workProjects.js'

const projectsWithLinks = workProjects.filter((project) => project.link && project.link.href)

projectsWithLinks.forEach((project) => {
  assert.ok(project.link.title, `Project "${project.title}" should provide link.title when link.href exists.`)
})

console.log(`Validated ${projectsWithLinks.length} project link(s).`)
