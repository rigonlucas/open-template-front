<template>
    <v-list>
        <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                v-for="child in item.items"
                :key="child.title"
                link
                :to="{ name: child.route }"
            >
                <v-list-item-content>
                    <v-list-item-title
                        v-text="child.title"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<script>
export default {
  name: "BarMenuLeft",
  data(){
    return {
      items: [
        {
          title: "Processo",
          action: "mdi-progress-wrench",
          active: true,
          items: [
            { title: "Novo", route: "admin.processo.novo" },
            { title: "Todos", route: "admin.processo.lista" },
          ],
        },
        {
          title: "Teste",
          action: "mdi-tag",
          items: [{ title: "List Item", route: "home" }],
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
