import VueRouter from 'vue-router';
import Vue from 'vue';
//导入组件
import HerosList from '../views/heros/List';
import EquipsList from '../views/equips/List';
import WeaponsList from '../views/weapons/List';

//注册Vouter插件  this.$router $this.$route
Vue.use(VueRouter);

//创建路由对象
var  router = new VueRouter({
    //配置激活的类样式
    linkExactActiveClass:'active',
    //路由规则
    routes: [
        {path:'/',redirect:'/heros'},
        {name:'heros',path:'/heros',component:HerosList},
        {name:'equips',path:'/equips',component:EquipsList},
        {name:'weapons',path:'/weapons',component:WeaponsList}
    ]
}); 

export default router;