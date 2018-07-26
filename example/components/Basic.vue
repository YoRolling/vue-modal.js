<template>
    <div class="hello">
        <button @click="open">click to open modal</button>
    </div>
</template>

<script>
export default {
    name: 'BasicComponent',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        open() {
            const modal = this.$modal.open(
                {
                    template: `<div class='hello'><h1>aaaa</h1><div><button @click="close">close</button><button @click="dismiss">dismiss</button></div></div>`,
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
            )
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
