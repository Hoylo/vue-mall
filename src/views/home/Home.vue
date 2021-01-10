<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <tab-control :tabs="tabs" class="tab-control" />
    <ul>
      <li>1ldl</li>
      <li>2ldl</li>
      <li>3ldl</li>
      <li>4ldl</li>
      <li>5ldl</li>
      <li>6ldl</li>
      <li>7ldl</li>
      <li>8ldl</li>
      <li>9ldl</li>
      <li>10ldl</li>
      <li>11ldl</li>
      <li>12ldl</li>
      <li>13ldl</li>
      <li>14ldl</li>
      <li>15ldl</li>
      <li>16ldl</li>
      <li>17ldl</li>
      <li>18ldl</li>
      <li>19ldl</li>
      <li>20ldl</li>
      <li>21ldl</li>
      <li>22ldl</li>
      <li>23ldl</li>
      <li>24ldl</li>
      <li>25ldl</li>
      <li>26ldl</li>
      <li>27ldl</li>
      <li>28ldl</li>
      <li>29ldl</li>
      <li>30ldl</li>
      <li>31ldl</li>
      <li>32ldl</li>
      <li>33ldl</li>
      <li>34ldl</li>
      <li>35ldl</li>
      <li>36ldl</li>
      <li>37ldl</li>
      <li>38ldl</li>
      <li>39ldl</li>
      <li>40ldl</li>
      <li>41ldl</li>
      <li>42ldl</li>
      <li>43ldl</li>
      <li>44ldl</li>
      <li>45ldl</li>
      <li>46ldl</li>
      <li>47ldl</li>
      <li>48ldl</li>
      <li>49ldl</li>
      <li>50ldl</li>
      <li>51ldl</li>
      <li>52ldl</li>
      <li>53ldl</li>
      <li>54ldl</li>
      <li>55ldl</li>
      <li>56ldl</li>
      <li>57ldl</li>
      <li>58ldl</li>
      <li>59ldl</li>
      <li>60ldl</li>
      <li>61ldl</li>
      <li>62ldl</li>
      <li>63ldl</li>
      <li>64ldl</li>
      <li>65ldl</li>
      <li>66ldl</li>
      <li>67ldl</li>
      <li>68ldl</li>
      <li>69ldl</li>
      <li>70ldl</li>
      <li>71ldl</li>
      <li>72ldl</li>
      <li>73ldl</li>
      <li>74ldl</li>
      <li>75ldl</li>
      <li>76ldl</li>
      <li>77ldl</li>
      <li>78ldl</li>
      <li>79ldl</li>
      <li>80ldl</li>
      <li>81ldl</li>
      <li>82ldl</li>
      <li>83ldl</li>
      <li>84ldl</li>
      <li>85ldl</li>
      <li>86ldl</li>
      <li>87ldl</li>
      <li>88ldl</li>
      <li>89ldl</li>
      <li>90ldl</li>
      <li>91ldl</li>
      <li>92ldl</li>
      <li>93ldl</li>
      <li>94ldl</li>
      <li>95ldl</li>
      <li>96ldl</li>
      <li>97ldl</li>
      <li>98ldl</li>
      <li>99ldl</li>
      <li>100ldl</li>
    </ul>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import TabControl from "@/components/common/tabControl/TabControl";

import {getHomeData} from "@/network/home"

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      tabs: [
        {
          id: 1,
          title: "java"
        },
        {
          id: 2,
          title: 'php'
        },
        {
          id: 3,
          title: 'golang'
        }
      ]
    }
  },
  created() {
    getHomeData().then (res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background: var(--color-tint);
  color: #f6f6f6;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>