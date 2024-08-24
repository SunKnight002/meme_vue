<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footerbar from '../../components/Footerbar.vue';
</script>

<template>
  <TopNavbar />

  <main>
    <section class="wrapper">
      <div class="overlay-2"></div>

      <!-- Logo圖片 -->
      <img src="/src/assets/img/memelogo.png" alt="" class="logo">
      <section class="content">
        <!-- 前端按鈕 -->
        <section class="content-btn-L">
          <img src="/src/assets/img/BTN-yellow.png" alt="">
          <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入前端
          </a>
        </section>
        <!-- 中央內容 -->
        <section class="content-text">
          
          <div class="content-text-topic">
            <h1>命運的骰子已經骰下</h1>
            <p>歡迎來到 Meme謎因的迷宮</p>
            <p>迷途的羔羊</p>
          </div>

          <div class="content-text-slogran">
            <span>選擇你的</span>
            <span class="content-text-slogran-red">下一步...</span>
          </div>
        </section>
        <!-- 右側按鈕 -->
        <section class="content-btn-R">
          <img src="/src/assets/img/BTN-blue.png" alt="">
          <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入後端
          </a>
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
    position: relative;
    .wrapper{
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .overlay-2 {
        position: absolute;
        top: 0;
        left: 0;
        // width: 250.625em;
        width: 100%;
        height: 70vh;
        background-image: url(../../assets/img/cloud-6.png);
        background-position: 0 100%;
        background-repeat: repeat-x;
        animation: cloudLoop 80s linear infinite;
        z-index: 2;
        // pointer-events: none;
   
        @-webkit-keyframes cloudLoop {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          opacity: 0.8;
          filter: blur(5px);
        }

        100% {
          -webkit-transform: translate3d(-50%, 0, 0);
          transform: translate3d(-50%, 0, 0);
          opacity: 0.5;
          filter: blur(10px);
        }
      }

      @keyframes cloudLoop {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          opacity: 0.8;
          filter: blur(5px);
        }

        100% {
          -webkit-transform: translate3d(-50%, 0, 0);
          transform: translate3d(-50%, 0, 0);
          opacity: 0.5;
          filter: blur(10px);
        }
      }
      }
      .logo{
        width: 25%;
        height: auto;
        margin-top: 180px;
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
          a{
            position: relative;
            display: inline-block;
            padding: 15px 30px;
            color: #2196f3;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 36px;
            transition: 0.2s;
            overflow: hidden;
            text-decoration: none;
            font-weight: bold;
            margin-top: 40px;
            &:hover{
              color: #255784;
              background: #2196f3;
              box-shadow: 0 0 10px #2196f3,0 0 40px #2196f3,0 0 80px #2196f3;
              transition-delay: 1s;
            }
            span{
              position: absolute;
              display: block;
            }
            span:nth-child(1){
              top: 0;
              left: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #2196f3); /* 修正這裡的顏色 */
            }
            &:hover span:nth-child(1){
              left: 100%;
              transition: 1s;
            }
            span:nth-child(3){
              bottom: 0;
              right: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(270deg,transparent,#2196f3);
            }
            &:hover span:nth-child(3){
              right: 100%;
              transition: 1s;
              transition-delay: 0.5s;
            }
            span:nth-child(2){
              top: -100%;
              right: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(180deg,transparent,#2196f3);
            }
            &:hover span:nth-child(2){
              top: 100%;
              transition: 1s;
              transition-delay: 0.25s;
            }
            span:nth-child(4){
              bottom: -100%;
              right: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(360deg,transparent,#2196f3);
            }
            &:hover span:nth-child(4){
              bottom: 100%;
              transition: 1s;
              transition-delay: 0.75s;
            }
          }
        }
        .content-text{
          width: 40%;
          color: #fff;
          text-align: center;
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, auto);
          margin-bottom: 180px;
          .content-text-topic{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            h1{
              font-size: 24px;
              font-weight: bold;
            }
            p{
              font-size: 16px;
              font-weight: 500;
            }
          }
          .content-text-slogran{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 16px;
            span{
              font-size: 40px;
              font-weight: bold;
            }
            .content-text-slogran-red{
              font-size: 48px;
              font-weight: bold;
              color: red;
            }
          }
        }
        .content-btn-R{
          color:#fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          a{
            position: relative;
            display: inline-block;
            padding: 15px 30px;
            color: #2196f3;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 36px;
            transition: 0.2s;
            overflow: hidden;
            text-decoration: none;
            font-weight: bold;
            margin-top: 40px;
            &:hover{
              color: #255784;
              background: #2196f3;
              box-shadow: 0 0 10px #2196f3,0 0 40px #2196f3,0 0 80px #2196f3;
              transition-delay: 1s;
            }
            span{
              position: absolute;
              display: block;
            }
            span:nth-child(1){
              top: 0;
              left: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #2196f3); /* 修正這裡的顏色 */
            }
            &:hover span:nth-child(1){
              left: 100%;
              transition: 1s;
            }
            span:nth-child(3){
              bottom: 0;
              right: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(270deg,transparent,#2196f3);
            }
            &:hover span:nth-child(3){
              right: 100%;
              transition: 1s;
              transition-delay: 0.5s;
            }
            span:nth-child(2){
              top: -100%;
              right: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(180deg,transparent,#2196f3);
            }
            &:hover span:nth-child(2){
              top: 100%;
              transition: 1s;
              transition-delay: 0.25s;
            }
            span:nth-child(4){
              bottom: -100%;
              right: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(360deg,transparent,#2196f3);
            }
            &:hover span:nth-child(4){
              bottom: 100%;
              transition: 1s;
              transition-delay: 0.75s;
            }
          }
        }
      }
    }
  }
</style>