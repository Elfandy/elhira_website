import {reactive} from 'vue';


export const store = reactive({
    scrollValue:0,
    scrollValueSet(i){
        this.scrollValue = i;
        },
    language:'ar'

});