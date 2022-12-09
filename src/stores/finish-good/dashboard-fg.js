import { defineStore } from "pinia";

const d$dbfg = defineStore({
    id: 'dashboard-fg',
    state: () => ({
       file: []
    }),
    actions: {
        // actions upload file
        async a$upload(form) {
            try {
                // const data = await s$file.upload(form);
                this.state.file.push(form)
                console.log(this.state.file)
                // return data;
            } catch (error) {
                throw error
            }
        },
        // buat actions get list file 
        async a$listFile() {
            
        },
    },
    getters: {
      
    },
});

export default d$dbfg;