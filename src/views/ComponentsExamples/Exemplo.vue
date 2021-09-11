<template>
    <div>
        <div class="row py-3">
            <div class="col-md-4">
                Componete pai deve conter um <code>'router-view'</code> para funcionar a dependência de rotas
                <div>
                    <router-link
                        class="nav-link"
                        :to="{ name: 'components-index' }">
                        Componente pai
                    </router-link>
                    <router-link
                        class="nav-link"
                        :to="{ name: 'Components-form-validation' }">
                        Form validation
                    </router-link>
                </div>
            </div>
            <div class="col-md-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
}
</script>

<style scoped>

</style>
