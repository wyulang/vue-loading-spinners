<template>
  <transition name="loading">
    <div v-show="visible" class="__loading-content" :style="{ backgroundColor: background || '' }" :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="__loading-box">
        <div class="__loading-spinner">
          <div v-if="html" v-html="html"></div>
          <div v-if="type==1" class="__spinner-defalut">
            <div class="__spinner_1"></div>
            <div v-if="text" class="__spinner-text">{{text}}</div>
          </div>
          <div class="__spinner_2" v-if="type==2"></div>
          <div :style="color[0]" class="__spinner_3" v-if="type==3">
            <div :style="{'background-color':color[0]}"></div>
            <div :style="{'background-color':color[1]}"></div>
          </div>
          <div :style="color[0]" class="__spinner_4" v-if="type==4">
            <div :style="{'background-color':color[0]}"></div>
            <div :style="{'background-color':color[1]}"></div>
          </div>
          <div :style="{'color':color[0]}" class="__spinner_5" v-if="type==5"></div>
          <div class="__spinner_6" v-if="type==6">
            <div :style="{'background-color':color[0]}" class="k-ball7a"></div>
            <div :style="{'background-color':color[1]}" class="k-ball7b"></div>
            <div :style="{'background-color':color[2]}" class="k-ball7c"></div>
            <div :style="{'background-color':color[3]}" class="k-ball7d"></div>
          </div>
          <div v-if="text && ![1].includes(type)" class="__spinner-text">{{text}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      type: 1,
      color: [],
      html: "",
      background: null,
      fullscreen: true,
      visible: true,
      customClass: '',
      bgColor: ''
    }
  },
  methods: {
    isArray(o) {
      return Object.prototype.toString.call(o) == "[object Array]";
    }
  },
  created() {
    this.type = parseInt(this.type || 1);
    if (![1, 2, 3, 4, 5, 6].includes(this.type) && !this.html) {
      this.type = 1;
    }
    if (this.isArray(this.color)) {
      this.bgColor = this.color;
    } else {
      this.bgColor = [this.color];
    }
    if ([1].includes(this.type)) {
      this.text = this.text ? this.text : "loading..."
    }
  }
}
</script>

<style lang='less'>
@import "./index.less";
.__loading-content {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  &.is-fullscreen {
    position: fixed !important;
  }
  .__loading-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .__loading-spinner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      .__spinner-defalut {
        display: inline-flex;
        padding: 10px 10px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .__spinner-text {
          margin-top: 7px;
          color: #f2f2f2;
        }
      }
    }
    .__spinner-text {
      font-size: 16px;
    }
  }
}
</style>
