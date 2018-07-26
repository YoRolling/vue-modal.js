<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h3>Basic Usage</h3>
        <BasicComponent/>
        <h3>SFC Usage</h3>
        <SFCComponent/>
        <h3>SFC with options </h3>
        <OptionsComponent/>
    </div>
</template>

<script>
import BasicComponent from './components/Basic'
import SFCComponent from './components/SFC'
import OptionsComponent from './components/Options'
export default {
    name: 'App',
    components: {
        BasicComponent,
        SFCComponent,
        OptionsComponent
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
}

.hello{
    padding: 12px;
}
</style>
