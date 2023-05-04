
<template>
    <flow-form v-bind:progressbar="false" v-bind:navigation="false" v-bind:questions="questions" v-bind:language="language">

        <template v-slot:completeButton>
            <div class="f-submit">
                <p v-if="submitted">{{ language.successText }}</p>

                <div v-else>
                    <button v-if="!loading" class="o-btn-action" ref="button" type="submit" href="#"
                        v-on:click.prevent="onSendData()" aria-label="Press to submit">
                        <span>{{ language.submitText }}</span>
                    </button>
                </div>
                <progress-bar :duration="tempoTotal" v-if="loading" />
            </div>
        </template>
    </flow-form>
</template>


<script>
import ProgressBar from '../../src/components/ProgressBar.vue'
import FlowForm from '../../src/components/FlowForm.vue'
import QuestionModel, { QuestionType } from '../../src/models/QuestionModel'
import LanguageModel from '../../src/models/LanguageModel'

let tempoTotal = 5000

export default {
    name: 'testeComponent',
    components: {
        FlowForm,
        ProgressBar

    },
    data() {

        return {
            submitted: false,
            loading: false,
            tempoTotal,
            language: new LanguageModel({
            }),
            questions: [
                // QuestionModel array
                new QuestionModel({
                    title: 'Escolha os arquivos',
                    type: QuestionType.File,
                    multiple: true,
                    required: true

                })
            ],
        }
    },
    methods: {
        onSendData() {
            console.log("clicou")
            this.loading = true
            setTimeout(() => {
                this.submitted = true
            }, tempoTotal);


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