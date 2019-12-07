<template>
    <div class="home">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <div class>Shop Street</div>
            </template>
        </nav-bar>

        <swiper :options="swiperOption" ref="theSwiper">
            <!-- slides -->
            <swiper-slide v-for="(banner, index) in banners" :key="index">
                <img class="banner-img" :src="'/banner/'+banner+'.jpg'" alt />
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <recommend :recommends="recommends"></recommend>
    </div>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar";
import Recommend from "./Recommend/Recommend";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

// import { getHomeData } from "@/requst/home"; // process request

export default {
    name: "home",
    data() {
        return {
            swiperOption: {
                height: 300,
                pagination: {
                    el: ".swiper-pagination"
                },
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                }
            },
            banners: [],
            recommends: []
        };
    },
    computed: {
        swiper() {
            return this.$refs.theSwiper.swiper; // get the swiper controler
        }
    },
    components: {
        NavBar,
        Swiper: swiper,
        SwiperSlide: swiperSlide,
        Recommend
    },
    created() {
        /**-----------------------------------------------------------------------------------------------
         * + no real data, need create own
         * -----------------------------------------------------------------------------------------------
         */
        //   getHomeData().then(res => {
        //       this.result = res;
        //   });
        this.banners = ["banner0", "banner1", "banner2", "banner3"];
        this.recommends = ["惊艳变身", "显瘦穿搭", "低至一元", "十元优惠"];
    },
    mounted() {
        // this.swiper
    }
};
</script>

<style lang="scss" scoped>
.home-nav {
    background-color: pink;
    color: #ffffff;
}
.banner-img {
    width: 100%;
    min-width: 375px;
    display: inline-block;
}
</style>
