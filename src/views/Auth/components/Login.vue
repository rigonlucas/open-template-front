<template>
    <v-container
        fluid
        fill-height>
        <v-layout
            align-center
            justify-center>
            <v-flex
                xs12
                sm8
                md4>
                <v-card
                    class="elevation-12"
                >
                    <v-card-title class="light-blue darken-4 justify-center">
                        <v-img
                            max-height="250"
                            max-width="250"
                            class="mx-4 my-4"
                            src=""
                        ></v-img>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                v-model="form.email"
                                label="E-mail"
                                :rules="emailRules"
                                :error-messages="errors.email"
                                outlined
                                required
                                class="my-3"
                            />
                            <v-text-field
                                v-model="form.password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPassword ? 'text' : 'password'"
                                :rules="passwordRules"
                                :error-messages="errors.password"
                                label="Senha"
                                min="8"
                                counter
                                outlined
                                required
                                @keyup="loginKeyUp"
                                @click:append="showPassword = !showPassword"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            class="white--text mr-6"
                            block
                            :loading="isLoading"
                            color="light-blue darken-4"
                            @click="login">
                            ENTRAR
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {},
      showPassword: false,
      passwordRules: [
          (v) => !!v || "Senha obrigatório",
          (v) => (v && v.length >= 6) || "Senha requer 6 caracteres",
      ],
      emailRules: [
        (v) => !!v || "E-mail obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
      ],
      isLoading: false,
    }
  },
  methods: {
    ...mapActions({
      dispatchLogin: "Auth/login",
    }),
    ...mapGetters({
      getPermissions: "Auth/permissions",
    }),
    loginKeyUp(e){
      if (e.keyCode === 13){
        this.login()
      }
    },
    async login() {
      this.isLoading = true

      try {
        await this.dispatchLogin(this.form)
        this.$emit("logged")
        this.$router.push({ name: "candidato.minhas.redacao" })
      } catch ({ response }) {
        if (response.data.errors) {
          this.errors = response.data.errors
        } else {
          this.errors["email"] = [response.data.message]
          this.errors["password"] = [response.data.message]
        }
        //this.$refs.observer.validate()
      }

      this.isLoading = false
    },
  },
}
</script>

<style scoped>
</style>
