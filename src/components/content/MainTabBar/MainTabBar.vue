<template>
    <tab-bar>
        <!-- one item -->
        <tab-bar-item path="/home">
            <template v-slot:item-icon>
                <img src="@/assets/images/TabBar/home.svg" alt="home" />
            </template>
            <template v-slot:item-icon-active>
                <img src="@/assets/images/TabBar/home-active.svg" alt="home" />
            </template>
            <template v-slot:item-text>
                <div>Home</div>
            </template>
        </tab-bar-item>
        <!-- one item -->
        <!-- one item -->
        <tab-bar-item path="/category">
            <template v-slot:item-icon>
                <img src="@/assets/images/TabBar/categories.svg" alt="categories" />
            </template>
            <template v-slot:item-icon-active>
                <img src="@/assets/images/TabBar/categories-active.svg" alt="categories" />
            </template>
            <template v-slot:item-text>
                <div>Category</div>
            </template>
        </tab-bar-item>
        <!-- one item -->
        <!-- one item -->
        <tab-bar-item path="/cart">
            <template v-slot:item-icon>
                <img src="@/assets/images/TabBar/cart.svg" alt="cart" />
            </template>
            <template v-slot:item-icon-active>
                <img src="@/assets/images/TabBar/cart-active.svg" alt="cart" />
            </template>
            <template v-slot:item-text>
                <div>Cart</div>
            </template>
        </tab-bar-item>
        <!-- one item -->
        <!-- one item -->
        <tab-bar-item path="/profile">
            <template v-slot:item-icon>
                <img src="@/assets/images/TabBar/profile.svg" alt="profile" />
            </template>
            <template v-slot:item-icon-active>
                <img src="@/assets/images/TabBar/profile-active.svg" alt="profile" />
            </template>
            <template v-slot:item-text>
                <div>Profile</div>
            </template>
        </tab-bar-item>
        <!-- one item -->
    </tab-bar>
</template>

<script>
import TabBar from "@/components/common/TabBar/TabBar";
import TabBarItem from "@/components/content/TabBarItem/TabBarItem";

export default {
    components: {
        TabBar,
        TabBarItem
    }
};
</script>
<style lang="scss" scoped>
.tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>