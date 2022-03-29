const app = Vue.createApp({
    data(){
        return{
            name: 'Jorge',
            age: 28,
            urlImg: 'https://lenguajejs.com/vuejs/introduccion/que-es-vue/vuejs.png'
        };        
    },
    methods:{
        getRandomNumber(){
            return Math.random();
        }
    }
});
app.mount('#assignment');