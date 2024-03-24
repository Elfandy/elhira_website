import {defineStore} from 'pinia';

export const usePublicStore = defineStore('public',{   
    
    state: () => ({
        language: 'en',
        scrollValue:0
    }),
    getters: {
        getLang: (state) => {
            return state.language;
        },
        getScrollValue: (state) =>{
            return state.scrollValue;
        }
    },
    actions: {
        setLang(lang) {
            this.language = lang
        },
        setScrollValue(scrollValue) {
            this.scrollValue = scrollValue
        }
    }
})