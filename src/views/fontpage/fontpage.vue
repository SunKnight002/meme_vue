<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footerbar from '../../components/Footerbar.vue';
</script>

<template>
  <TopNavbar />

  <main>
    <section class="wrapper">
      <!-- Logo圖片 -->
      <img src="/src/assets/img/memelogo.png" alt="" class="logo">
      <section class="content">
        <!-- 前端按鈕 -->
        <section class="content-btn-L">
          <img src="/src/assets/img/BTN-yellow.png" alt="">
          <p>進入前端</p>
        </section>
        <!-- 中央內容 -->
        <section class="content-text">
          <h1>命運的骰子已經骰下</h1>
          <p>歡迎來到 Meme謎因的迷宮</p>
          <p>迷途的羔羊</p>
          <div class="content-text-slogran">
            <span>選擇你的</span>
            <span>下一步...</span>
          </div>
        </section>
        <!-- 右側按鈕 -->
        <section class="content-btn-R">
          <img src="/src/assets/img/BTN-blue.png" alt="">
          <p>進入前端</p>
        </section>
      </section>
    </section>
  </main>

  <Footerbar />
</template>
<style></style>

<script>
export default {
  components: {
    TopNavbar
  },

  computed: {},
  
  mounted() {
  },
  
  data() {
    return {
    };
  },
};
</script>


<style lang="scss" scoped>
  main{
    width: 100%;
    background-image: url(/src/assets/img/BG-fontpage.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    .wrapper{
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo{
        width: 20%;
        height: auto;
        margin-top: 176px;
        margin-bottom: 80px;
      }
      .content{
        width: 100%;
        display: flex;
        gap: 80px;
        align-items: center;
        justify-content: center;
        .content-btn-L{
          color:#fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .content-text{
          width: 40%;
          color: #fff;
          text-align: center;
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, auto);
          .content-text-slogran{
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .content-btn-R{
          color:#fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>