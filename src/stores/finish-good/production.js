import { defineStore } from "pinia";

const d$production = defineStore({
    id: 'delivery',
    state: () => ({
       file: []
    }),
    actions: {
        async a$upload(form) {
            try {
                // const data = await s$file.upload(form);
                this.state.file.push(form)
                console.log(this.state.file)
                // return data;
            } catch (error) {
                throw error
            }
        }
    },
    getters: {
      
    },
});

export default d$production;