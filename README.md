# vue-modal.js

> A  modal component for `Vuejs`

## Install

    npm i -D @yorolling/vmodal.js

## Usage

```js
import VModal from '@yorolling/vmodal.js'
Vue.use(VModal)

// in component

export default {

    methods: {
        open() {
            const modal = this.$modal.open(
                {
                    template: `<div class='hello'>
                        <h1>aaaa</h1>
                        <div>
                            <button @click="close">close</button>
                            <button @click="dismiss">dismiss</button>
                        </div>
                        </div>`,
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
```

## Example

### Online Demo

[https://codesandbox.io/s/w7189485q8](https://codesandbox.io/s/w7189485q8)

### Local Demo

see example folders;

## dev

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Other

This repro bases on `vue-cli` and `webpack` template.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
