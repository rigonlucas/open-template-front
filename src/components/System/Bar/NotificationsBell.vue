<template>
    <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                class="mx-1"
                :disabled="hasMessages"
                v-on="on"
            >
                <v-badge
                    :content="messages"
                    :value="messages"
                    color="green"
                    overlap
                    class="mx-1"
                >
                    <v-icon :color="colorIconClass">
                        mdi-bell
                    </v-icon>
                </v-badge>
            </v-btn>
        </template>
        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    <v-btn
                        depressed
                        rounded
                        text
                    >
                        <i class="mdi mdi-circle"></i>
                        atualize seus dados
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        depressed
                        rounded
                        text
                        block
                    >
                        <v-icon
                            small
                            color="green"
                        >
                            mdi mdi-circle
                        </v-icon>
                        Notificação 1
                    </v-btn>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>
export default {
  name: "NotificationsBell",
  data(){
    return {
      messages: 1,
      colorIcon: null,
    }
  },
  computed: {
    colorIconClass(){
      if (this.messages > 0){
        return "white"
      }
      return ""
    },
    hasMessages(){
      if (this.messages > 0){
        return false
      }
      return true
    },
  },
}
</script>

<style scoped>

</style>
