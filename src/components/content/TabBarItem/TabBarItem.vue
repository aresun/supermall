<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :class="{active: isActive}">
            <slot name="item-text"></slot>
        </div>
        <img src alt />
        <div>a</div>
    </div>
</template>
    
<script>
export default {
    name: "TabBarItem",
    props: {
        path: String
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1;
        }
    },
    data() {
        return {};
    },
    methods: {
        itemClick() {
            console.log("this.path", this.path);
            this.$router.replace(this.path);
        }
    }
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;

    font-size: 13px;
}
.tab-bar-item img {
    width: 24px;
    height: 24px;

    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 3px;
}
.active {
    color: red;
}
</style>