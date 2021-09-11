<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="email"
                    name="email">
                    <input
                        v-model="email"
                        type="text">
                    <span>{{ errors[0] }}</span>
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </ValidationProvider>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider } from "vee-validate"
export default {
  name: "FormsValidation",
  components: {
    ValidationProvider,
  },
  data(){
    return {
      email: "",
    }
  },
}
</script>

<style scoped>

</style>
