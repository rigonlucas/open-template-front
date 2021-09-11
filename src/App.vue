<template>
    <div id="app">
        <v-app id="inspire">
            <div v-if="isAuthenticated">
                <template v-if="access.permissionTI">
                    <v-navigation-drawer
                        id="left"
                        v-model="showLeftMenu"
                        app
                        flat
                    >
                        <bar-menu-left/>
                    </v-navigation-drawer>

                    <v-navigation-drawer
                        id="right"
                        v-model="showRightMenu"
                        app
                        flat
                        right
                    >
                        <bar-menu-right/>
                    </v-navigation-drawer>
                </template>

                <v-app-bar
                    app
                    flat
                    color="#003E7D"
                    class="white--text"
                >
                    <template v-if="access.permissionTI">
                        <v-app-bar-nav-icon
                            class="white--text"
                            @click.stop="toggleLeftMenu"></v-app-bar-nav-icon>
                    </template>

                    <bar-header-left/>

                    <v-spacer></v-spacer>

                    <bar-header-right/>

                    <template v-if="access.permissionTI">
                        <v-app-bar-nav-icon
                            class="white--text"
                            @click.stop="toggleRightMenu">
                            <v-icon>mdi-toolbox</v-icon>
                        </v-app-bar-nav-icon>
                    </template>
                </v-app-bar>
            </div>

            <v-main :class="[isAuthenticatedClass]">
                <v-container fluid>
                    <router-view @logged="updateMenus"></router-view>
                </v-container>
            </v-main>

            <!--            <v-footer-->
            <!--                v-if="isAuthenticated"-->
            <!--                app>-->
            <!--                EITA-->
            <!--            </v-footer>-->
        </v-app>
    </div>
</template>

<script>
  //import Header from "./components/Header"
  //import Footer from "./components/Footer"
  import { mapGetters } from "vuex"
  import { matchUserPermissions } from "@/router/tools/permissions"

  import BarMenuLeft from "@/components/System/Bar/BarMenuLeft"
  import BarHeaderRight from "@/components/System/Bar/BarHeaderRight"
  import BarHeaderLeft from "@/components/System/Bar/BarHeaderLeft"
  import BarMenuRight from "@/components/System/Bar/BarMenuRight"
  export default {
    components: {
      BarMenuRight,
      BarHeaderLeft,
      BarHeaderRight,
      BarMenuLeft,
      //Footer,
      //Header,
    },
    data: () => ({
      access: {
        permissionTI: false,
        redacao: false,
      },
      showLeftMenu: false,
      showRightMenu: false,
    }),
    computed: {
      ...mapGetters({
          isAuthenticated: "Auth/isAuthenticated",
          getPermissions: "Auth/permissions",
      }),
      isAuthenticatedClass(){
        if (this.isAuthenticated){
          return
        }
        return "grey lighten-5"
      },
    },
    created() {
      this.updateMenus()
    },
    methods: {
      toggleLeftMenu(){
        this.showLeftMenu = !this.showLeftMenu
      },
      toggleRightMenu(){
        this.showRightMenu = !this.showRightMenu
      },
      updateMenus(){
        this.access.permissionTI = !!matchUserPermissions(["redacao_admin"], this.getPermissions)
        this.access.redacao = !!matchUserPermissions(["redacao"], this.getPermissions)
      },
    },
  }
</script>
