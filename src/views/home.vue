<template>
    <div>
        <ol>
            <li v-for="todo in todos">
                {{todo.text}}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
    </div>
</template>
<script>
export default {
    name:'indexP',
    data(){
        return {
            todos:[
                {text:'首页第一段文本'},
                {text:'首页第二段文本'},
                {text:'首页第三段文本'}
            ]
        }
    },
    methods:{
        eClick(){
            console.log(999)
        }
    }
}
</script>
<style scoped>
    ol{width:200px;margin:20px auto;}
</style>