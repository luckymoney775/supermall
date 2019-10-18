<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">{{result.老师微信}}</div>
      </nav-bar>
      <home-swiper :banners="banner"/>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles='title'/>
      <ul>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
        <li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li><li>列表111</li>
      </ul>

    </div>
</template>

<script>

//-----------------------------------------------------------------------------
   const banners=[{
       link:"http://music.163.com/api/playlist/detail?id=19726258",
       image: "http://p1.music.126.net/o3G7lWrGBQAvSRt3UuApTw==/2002210674180201.jpg",
        title:'冬装'
   },
       {
           link:"http://music.163.com/api/playlist/detail?id=19726258",
           image: "http://p2.music.126.net/L3wXkbpm-QPg0KDuiq45_g==/109951163873715374.jpg",
           title:'秋装'
       },
       {
           link:"http://music.163.com/api/playlist/detail?id=19726258",
           image: "http://p1.music.126.net/L1-zV3rpmXitPdfZjBL3OQ==/3446968961217519.jpg",
           title:'夏装'
       },
       {
           link:"http://music.163.com/api/playlist/detail?id=19726258",
           image: "http://p1.music.126.net/yNLDoN-62zfUR70n42MJLQ==/109951164208833293.jpg",
           title:'春装'
       }

   ]
const t =['精选','春夏','秋冬','新款']


//-----------------------------------------------------------------------------


import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import  FeatureView from "./childComps/FeatureView"

import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from "network/home";

  export default {
        name: "Home",
         data(){
            return {
                result:{
                    老师微信:null
                },
                banner: [],
                recommends: [],
                title:[]
            }
         },
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl
        },

        created(){
         getHomeMultidata().then(res=>{
             this.result=res
             console.log(res)
             this.banner = banners  //res.data.banner.list;
             this.recommends = banners//res.data.recommend.list;
            })
            this.title=t
        }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px ;
  }
.home-nav{
  background-color: pink;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
