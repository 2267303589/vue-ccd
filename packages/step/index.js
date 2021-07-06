import Step from './src/step'

Step.install = Vue => {
    Vue.component(Step.name, Step)
}
export default Step