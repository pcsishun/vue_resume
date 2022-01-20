import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import Education from './components/education/Education.vue'
import Experience from './components/experience/Experience.vue'
import Hobby from './components/hobby/Hobby.vue'
import Project from './components/project/Project.vue'
import Skill from './components/skill/Skill.vue'

const routes = [
    {path:'/', component:HomePage},
    {path:'/education', component:Education},
    {path:'/experience', component:Experience},
    {path:'/hobby', component:Hobby},
    {path:'/project', component:Project},
    {path:'/skill', component:Skill}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router