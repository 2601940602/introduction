<template>
  <div id="example">
<<<<<<< HEAD
  	<!--你好呀 -->
    <!--我是被修改的文字-->
=======
  <!--我是被修改的文字-->
>>>>>>> 75f670bea37d733816c4527762e778a69d2dee8c
    <!-- 设置计算属性的绑定字段，即reversedMessage的计算属性绑定到此输入框 -->
    <!-- 输入框中内容变化会调用相应的getter, setter计算属性 -->
    <input v-model="reversedMessage">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>
<script>
export default {
  name: 'Compute',
  data () {
    return {
      message: ''
    }
  },
  computed: { // getter，setter计算属性都有
    reversedMessage: {
      // getter
      get: function () {
        console.log('getter called')
        console.log(this.message.split('').reverse().join(''));
        return this.message.split('').reverse().join('')
        
      },
      // setter
      set: function (newValue) {
        console.log('newValue: ' + newValue)
        this.message = newValue
      }
    }
  }
}
</script>
