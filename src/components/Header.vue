<template>
    <header class="bg-dark text-light shadow">
        <nav class="container-fluid d-flex justify-content-lg-between align-items-center py-3">
            <div class="header-left">
                <router-link to="/" custom v-slot="{ navigate }">
                    <h3
                        class="logo"
                        @click="navigate"
                    >
                        NOME PROJETO
                    </h3>
                </router-link>
            </div>
            <div class="header-center">
                AAAA
            </div>
            <div class="header-right">
                <router-link
                    :to="{ name: 'login' }"
                    class="btn btn-primary"
                    v-if="!isAuthenticated"
                >
                    Login
                </router-link>
                <base-button
                    v-else
                    variant="danger"
                    @click.native.prevent="logout"
                >
                    Sair
                </base-button>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import BaseButton from "./Base/BaseButton"

export default {
  name: "TheHeader",
  components: {BaseButton },
  computed: {
    ...mapGetters({ isAuthenticated: "Auth/isAuthenticated" }),
  },
  methods: {
    ...mapActions({ dispatchLogout: "Auth/logout" }),
    async logout() {
      await this.dispatchLogout()
      this.$router.push({ name: "login", query: { param: "teste", teste: "teste" } })
    },
  },
}
</script>

<style lang="scss" scoped>
.header-center {
  width: 600px;
}
</style>
