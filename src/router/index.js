import VueRouter from 'vue-router'
import Js from '../pages/Js'
import H5C3 from '../pages/H5C3'
import Otherskill from '../pages/Otherskill'
import PortfolioShow from '../pages/PortfolioShow'


export default new VueRouter({
    routes:[
        {
            name:'Js',
            path:'/js',
            component:Js,
        },
        {
            name:'H5C3',
            path:'/h5c3',
            component:H5C3,
        },
        {
            name:'Otherskill',
            path:'/otherskill',
            component:Otherskill,
        },
        {
            name:'PortfolioShow',
            path:'/portfolioShow',
            component:PortfolioShow,
        },
    ]
})