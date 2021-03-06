# vue-loading-new

> Just another collection of loading spinners with Vue.js

## Installation

``` bash
npm install --save vue-loading-new
```
or

``` bash
yarn add vue-loading-new
```

## Usage

``` vue
在页面引用

在App.vue 面页中引用CSS 
<style>
@import "~vue-loading-new/dist/vueLoadingNew.css";
</style>

<script>
  import loading from 'vue-loading-new';
  export default {
    data() {
      return {
        loads:null
      }
    },
    methods: {
      open(){
        this.loads=loading();
        setTimeout(() => {
          this.loads.close()
        }, 300);
      }
    }
  }
</script>

或 全局mixins中使用 
data() {
    return {
      loadingInstance: null,
      spinner: {
        show: res => {
          if (this.loadingInstance) {
            this.loadingInstance.close();
          }
          let options = {
            lock: true,
            target: null,
            text: '',
            type: 4,
            background: 'rgba(255, 255, 255, 0.6)',
            customClass: ''
          }
          Object.assign(options, res);
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            this.loadingInstance = Loading(options);
          });
        },
        close: res => {
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            if (this.loadingInstance) {
              this.loadingInstance.close();
            }
          });
        }
      }
    }
  },

  在页面中 使用 this.spinner.show() this.spinner.close();
```

## 配置

```bash
let config={
  text: "",
  type: 1,
  color: [],
  html: "",
  background: null,
  fullscreen: true,
  visible: true,
  customClass: '',
}

this.loads=loading(config);

切换图标 this.loads=loading({type:2});

html结合customClass，可打造自己的动态图片
```


### Props

| name          | Description  | type     | default  |
| ------------- |:------------:| -----:   |-----:|
| isLoading     | 是否显示      | Boolean  |false
| type          | 加载动态图    | Int       |1
| text          | 文字显示      | String   |加载中...
| color         | 图标颜色      | array    |空
| background    | 背景设置      | String   |transparent
| customClass   | 自定样试      | String   |空
| fullscreen    |              | boolean   |ture
| html          | v-html       | String   |html

github:https://github.com/wyulang/vue-loading-spinners


