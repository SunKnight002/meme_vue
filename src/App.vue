<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import FontPage from './components/FontPage.vue';

// 定義 showMenuBar 函數
const menuBarVisible = ref(false);

const showMenuBar = () => {
  menuBarVisible.value = !menuBarVisible.value
}

</script>

<template>

  <header class="top">
    <RouterLink to="/"><img src="@/assets/img/memelogo.svg" alt="Meme Logo" /></RouterLink>
    <i class="fa fa-bars" aria-hidden="true" @click="showMenuBar"></i>
        <ul id="menuBar">
          <li><RouterLink to="/fontpage">線上體驗</RouterLink></li>
          <li><RouterLink to="/about">遊戲主題</RouterLink></li>
          <li><RouterLink to="/member">會員專區</RouterLink></li>
        </ul>
  </header>

  <section class="main">
        <section class="wrapper">
          <h1>超級無敵太陽騎士</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea nostrum natus, ducimus deserunt sunt maxime? Corporis ad, repellat perferendis molestias quo totam inventore sint officia excepturi, dolorem, ratione ut?</p>
            <p class="spec">Lorem ipsum dolor sit amet consectetur.</p>
            <h1>超級無敵太陽騎士</h1>
        </section>
    </section>

    <footer>
        <div class="bottom">
            <div><img src="./src/assets/img/memelogo.svg" alt=""></div>

            <div class="bm_text">
                <p>© Copyright Meme謎因工作室&nbsp;&nbsp;All Rights Reserved.</p>
                <p>本網站為緯育TibaMe【第93期】前端工程師專業技術養成班學員作品，僅供學習、展示之用途。</p>
            </div>

            <div class="icon">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-threads"></i>
            </div>
        </div>
    </footer>

  <RouterView />
</template>

<style scoped>

</style>
