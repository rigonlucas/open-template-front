<template>
    <login/>
</template>

<script>
import Login from "@/views/Auth/components/Login"

export default {
  name: "AuthPage",
  components: { Login },
  created() {
    console.log(this.$route.query)
  },
}
</script>

<style scoped>
.auth-page {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
}

.login-wrapper, .register-wrapper {
  width: 400px;
  margin: 0 20px;
}
</style>
