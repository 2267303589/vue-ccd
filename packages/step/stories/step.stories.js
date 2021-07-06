import Step from '../'

export default {
    title: 'Step',
    component: Step
}

export const StepTest = () => ({
    components: {Step},
    template: '<div><Step :count="count" :active="active"></step><button @click="next">next</button></div>',
    data(){
        return {
            count:4,
            active: 0
        }
    },
    methods: {
        next () {
            this.active++
        }
    }
})