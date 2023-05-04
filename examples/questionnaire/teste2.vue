
<template>
    <flow-form>
        <question id="a1b" required="true" placeholder="Por favor digite o seu nome" type="text" title="Qual seu nome?"
            v-model="name">
        </question>
        <question id="f4g" required="true" placeholder="Por favor digite o seu email" type="email"
            :title="'Qual seu email ' + name + '?'" v-model="email">
        </question>
        <question id="g9p" required="true" mask='(###) ###-######' placeholder="Por favor digite o seu telefone"
            type="phone" :title="name + ' Qual seu telefone? '" v-model="phone">
        </question>


    </flow-form>
</template>
  
<script>
import { ref } from 'vue';
import FlowForm from '../../src/components/FlowForm.vue';
import Question from '../../src/components/Question.vue'
const name = ref('')
const email = ref('')
const phone = ref('')

export default {
    name: 'testeComponent',
    components: {
        FlowForm,
        Question
    },
    data() {
        return {
            name,
            email,
            phone
        }

    }
}
</script>
<style lang="css">
@import '../../src/assets/css/themes/theme-minimal.css';
/* If using the npm package, use the following lines instead of the one above */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
</style>