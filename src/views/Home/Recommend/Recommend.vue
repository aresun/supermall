<template>
    <div class="recommends">
        <div class="recommend-item" v-for="(rec, index) in recommends" :key="index">
            <a :href="rec.url">
                <img :src="'/recommends/'+index+'.png'" alt />
                <div>{{rec}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.recommends {
    width: 100%;
    display: flex;
    text-align: center;

    padding: 15px 0 30px;

    border-bottom: 8px solid #eee;
}
.recommend-item {
    flex: 1;
    font-size: 13px;
    img {
      margin-bottom: 8px;
        width: 65px;
        height: 65px;
        display: inline-block;
        border-radius: 50%;
    }
}
</style>