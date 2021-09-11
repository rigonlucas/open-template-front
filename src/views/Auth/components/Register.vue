<template>
    <div></div>
<!--    <div class="card">-->
<!--        <div class="card-body">-->
<!--            <form-->
<!--                class="register-form"-->
<!--                @submit.prevent="register"-->
<!--            >-->
<!--                <div class="mb-3">-->
<!--                    <base-input-->
<!--                        id="name"-->
<!--                        v-model="form.name"-->
<!--                        name="name"-->
<!--                        required-->
<!--                        label="Nome"-->
<!--                        :errors="errors.name"-->
<!--                    />-->
<!--                </div>-->
<!--                <div class="mb-3">-->
<!--                    <base-input-->
<!--                        id="email"-->
<!--                        v-model="form.email"-->
<!--                        type="email"-->
<!--                        name="email"-->
<!--                        required-->
<!--                        label="Email"-->
<!--                        :errors="errors.email"-->
<!--                    />-->
<!--                </div>-->

<!--                <div class="mb-3">-->
<!--                    <base-input-->
<!--                        id="password"-->
<!--                        v-model="form.password"-->
<!--                        type="password"-->
<!--                        name="password"-->
<!--                        required-->
<!--                        label="Password"-->
<!--                        :errors="errors.password"-->
<!--                    />-->
<!--                </div>-->
<!--                <base-button-->
<!--                    type="submit"-->
<!--                    variant="primary"-->
<!--                    :loading="isLoading"-->
<!--                >-->
<!--                    Registrar-->
<!--                </base-button>-->
<!--            </form>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
// import { mapActions } from "vuex"
//
// export default {
//   name: "Register",
//   components: {BaseInput, BaseButton},
//   data() {
//     return {
//       form: {
//         name: "",
//         email: "",
//         password: "",
//       },
//       errors: {},
//       isLoading: false,
//     }
//   },
//   methods: {
//     ...mapActions({
//       dispatchRegister: "Auth/register",
//     }),
//     async register() {
//       this.isLoading = true
//
//       try {
//         await this.dispatchRegister(this.form)
//
//         this.$router.push({ name: "user-account" })
//       } catch ({ response }) {
//         this.errors = response.data.errors
//       }
//
//       this.isLoading = false
//     },
//   },
// }
</script>

<style scoped>
</style>
