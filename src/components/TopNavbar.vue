<template>
  <header class="top">
    <!-- 這是logo，點了之後回到index.html -->
    <router-link to="/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
    <!-- <i class="fa fa-bars" aria-hidden="true" @click="showMenuBar()"></i> -->
    <font-awesome-icon class="menu-icon" icon="bars" @click="showMenuBar"></font-awesome-icon>
    <!-- 這是列表，透過router連結到其他 .vue 頁面 -->
    <ul id="menuBar"  :class="{ 'visible': menuBarVisible }">
      <li><router-link to="/videogame/">線上體驗</router-link></li>
      <li><router-link to="/place-intro/">分館介紹</router-link></li>
      <li><router-link to="/register/">會員專區</router-link></li>
    </ul>
  </header>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const menuBarVisible = ref(false);

      const showMenuBar = () => {
        menuBarVisible.value = !menuBarVisible.value;
      };

      return {
        menuBarVisible,
        showMenuBar
      };
    }
  };
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 70px;
  color: white;
  background-color: #ff1e1e;
  margin: 0 auto;
  display: flex;
  line-height: 70px;

  @media (max-width: 650px) {
    position: relative;
    height: 100px;
  }

  img {
    width: 100px;
    height: 70px;
    padding-left: 80px;

    @media (max-width: 650px) {
      width: 70px;
      padding: 0;
      margin-left: 20px;
      height: 100px;
    }
  }

  .menu-icon {
    margin-left: auto;
    margin-top: 24px;
    display: none;

    @media (max-width: 650px) {
      text-align: center;
      display: block;
      margin-top: 35px;
      margin-right: 10px;
      width: 90px;
      font-size: 25px;
      cursor: pointer; /* 確保圖標可點擊 */
    }
  }

  ul {
    margin-left: auto;
    padding-right: 80px;
    font-size: 20px;
    display: flex;

    &.visible {
    display: flex;
  }
    @media (max-width: 650px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100px;
      right: 0;
      width: 100%;
      text-align: center;
      padding: 0;
      margin: 0;
      background-color: #262B3F;
      font-size: 20px;
      line-height: 100px;
    }
  }

  li {
    margin-right: 20px;

    @media (max-width: 650px) {
      margin: 0;
    }
  }

  a {
    display: block;
    color: white;
    text-decoration: none;

    &:hover {
      color: #FCD15B;
    }
  }
}
</style>
