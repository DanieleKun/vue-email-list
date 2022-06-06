const app = new Vue ({
    el: "#app",
    data: {
        email: []
    },
    mounted(){
        for(i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const myResult = result.data.response;
                this.email.push(myResult);
            });
            
        }
    }
});

