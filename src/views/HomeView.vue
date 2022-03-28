<template>
  <div class="home">
    <header>
      <router-link to="" class="logo">
        <img src="https://static.zcool.cn/git_z/z/common/images/svg/logo.svg" />
      </router-link>
      <div class="h-right">
        <router-link to="" class="download">下载APP</router-link>
        <van-dropdown-menu>
          <van-icon name="wap-nav" />
          <van-dropdown-item ref="item" :options="option1" v-model="value1">
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </header>
    <nav class="navcard">
      <router-link to="" class="navcard-item">
        <div class="round-icon">
          <span></span>
          <van-icon name="bullhorn-o" class="navcard-icon" />
        </div>
        <p>活动</p>
      </router-link>
      <router-link to="" class="navcard-item">
        <div class="round-icon">
          <span></span>
          <van-icon name="manager-o" class="navcard-icon" />
        </div>
        <p>招聘</p>
      </router-link>
      <router-link to="" class="navcard-item">
        <div class="round-icon">
          <span></span>
          <van-icon name="medal-o" class="navcard-icon" />
        </div>
        <p>赛事</p>
      </router-link>
      <router-link to="" class="navcard-item">
        <div class="round-icon">
          <span></span>
          <van-icon name="smile-comment-o" class="navcard-icon" />
        </div>
        <p>站酷海洛</p>
      </router-link>
    </nav>
    <main>
      <h3>首页推荐</h3>
      <div class="list">
        <router-link
          to=""
          v-for="(item, index) in list"
          :key="index"
          class="list-item"
        >
          <img :src="item.image" class="list-img" />
          <div class="list-r">
            <h5>{{ item.title }}</h5>
            <div>
              <p>{{ item.name }}</p>
              <div class="num">
                <div class="see">
                  <van-icon name="eye-o" />
                  <span>{{ item.num1 }}</span>
                </div>
                <div class="like">
                  <van-icon name="good-job-o" />
                  <span>{{ item.num2 }}</span>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="more">
        <button>查看更多</button>
      </div>
    </main>
  </div>
</template>

<script>
import instance from "@/request/api";
export default {
  name: "HomeView",
  data() {
    return {
      value1: null,
      option1: [
        { text: "搜索", icon: "search", value: 0 },
        { text: "登录 / 注册", icon: "smile-o", value: 1 },
      ],
      list: null,
    };
  },
  methods: {
    async getList() {
      let { data } = await instance.get("/home");
      // console.log(data);
      this.list = data.list;
    },
  },
  created() {
    this.getList();
  },
  components: {},
};
</script>

<style scoped>
header {
  height: 1.33rem;
  padding: 0 0.4rem;
  background-color: #ffd100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.logo {
  width: 2.67rem;
}
.h-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.download {
  width: 2.13rem;
  height: 0.64rem;
  line-height: 0.64rem;
  text-align: center;
  font-size: 0.32rem;
  border: 0.03rem solid #282828;
  border-radius: 0.11rem;
}
.van-dropdown-menu {
  width: 0.53rem;
  height: 0.53rem;
  margin-left: 0.53rem;
  position: relative;
}
.van-dropdown-menu .van-icon {
  font-size: 0.53rem;
  position: absolute;
  top: 0;
  left: 0;
}
.home >>> .van-dropdown-menu__bar {
  background-color: transparent;
  box-shadow: none;
  z-index: 1;
}
.home >>> .van-dropdown-menu__title {
  display: none;
}
.home >>> .van-cell {
  padding: 0.4rem;
  font-size: 0.34rem;
}
.home >>> .van-cell__left-icon {
  font-size: 0.48rem;
}
.navcard {
  width: 9.2rem;
  margin: 0.53rem auto 0;
  background: #fff;
  box-shadow: 0 0 0.27rem 0 rgb(0 0 0 / 10%);
  border-radius: 0.11rem;
  display: flex;
  padding: 0 0.13rem;
  align-items: center;
  justify-content: space-evenly;
}
.navcard-item {
  flex: 1;
  width: 2.13rem;
  height: 2.08rem;
  text-align: center;
  font-size: 0.37rem;
}
.round-icon {
  margin: 0.43rem auto 0.21rem;
  display: block;
  position: relative;
  width: 1.07rem;
  height: 0.77rem;
}
.round-icon span {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.47rem;
  height: 0.47rem;
  background: rgb(255, 209, 0);
  border-radius: 50%;
}
.navcard-icon {
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
  font-size: 0.6rem;
  font-weight: 900;
  color: rgb(40, 40, 40);
}
.navcard p {
  margin-bottom: 0.2rem;
}
main {
  padding: 0 0.4rem;
  margin-top: 0.8rem;
}
main h3 {
  font-size: 0.64rem;
  color: #333;
}
.list {
  margin-top: 0.27rem;
}
.list-item {
  display: flex;
  height: 3.73rem;
  padding: 0.27rem 0.4rem;
  display: flex;
  color: rgb(51, 51, 51);
  box-sizing: border-box;
}
.list-img {
  width: 46%;
  border-radius: 0.11rem;
}
.list-r {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 50.7%;
  padding: 0.27rem 0px;
  margin-left: 0.27rem;
  box-sizing: border-box;
}
.list-r h5 {
  font-weight: bold;
  line-height: 0.59rem;
  font-size: 0.43rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-r p {
  font-size: 0.32rem;
}
.num {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.13rem;
  font-size: 0.32rem;
}
.see,
.like {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.4rem;
  color: rgb(153, 153, 153);
}
.more {
  font-size: 0.37rem;
  text-align: center;
  padding: 0.53rem 0.3rem 0.96rem;
  color: #888;
}
.more button {
  height: 1.07rem;
  line-height: 1.07rem;
  width: 4.67rem;
  display: block;
  text-align: center;
  border: 0.03rem solid #666666;
  color: #666666;
  border-radius: 0.11rem;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: transparent;
}
</style>
