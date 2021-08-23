<template>
  <LoginInput v-show="true"/>
  <RegisterInput v-show="false"/>
  <AlertWindow/>
</template>

<script>
import LoginInput from '../components/loginInput.vue';
import RegisterInput from '../components/registerInput.vue';
import AlertWindow from '../components/alertWindow.vue';

export default {
  name: 'UserEnter',
  components : {
    LoginInput,
    RegisterInput,
    AlertWindow
  }
}
</script>

<style scoped>

</style>
