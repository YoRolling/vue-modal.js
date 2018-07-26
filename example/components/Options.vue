<template>
    <div class="hello">
        <button @click="open">click to open modal</button>
    </div>
</template>

<script>
import SFCModal from './sfc-modal'
export default {
    name: 'SFCComponent',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        open() {
            const modal = this.$modal.open(SFCModal, {
                backdrop: true,
                keyboard: false,
                size: 'lg',
                windowClass: ['my-class', 'your-class']
            })
            modal.result
                .then(result => {
                    console.log('result: ', result)
                })
                .catch(reason => {
                    console.log('reason: ', reason)
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
