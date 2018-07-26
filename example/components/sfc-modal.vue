<template>
    <div class="hello">
        <h1>this modal is opened By VModal and SFC Mode </h1>
        <button @click="close">close</button>
        <button @click="dismiss">dismiss</button>
    </div>
</template>

<script>
export default {
    name: 'SFCModal',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        close() {
            this.modalRef.close({
                code: 1,
                args: 'close by button'
            })
        },
        dismiss() {
            this.modalRef.dismiss({
                code: 1,
                args: 'dismiss by button'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
