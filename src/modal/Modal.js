/**
 *
 */
import { isString, isObject } from '@/utils/util';
import Vue from 'vue';
import ModalWindow from '@/components/V-ModalWindow';
import ModalBackdrop from '@/components/V-Backdrop';
import { VModalRef } from './VModalRef';
/**
 * @author YoRolling
 * @param {function} Construc component contructor
 * @returns
 * @version 1.0.0
 */

const createInstance = (Construc, $parent) => {
    return new Construc({ inject: ['modalRef'], parent: $parent });
};

/**
 * resolve Object Component then create instance via new
 * @author YoRolling
 * @param {Object} component Vue 组件
 * @return Vue Component Instance
 * @version 1.0.0
 */
const _resolveConstructor = (component, $parent) => {
    const constructor = Vue.extend(component);
    return createInstance(constructor, $parent);
};

/**
 * resolve component via *component-id* then create instance
 * @author YoRolling
 * @param {string} key global registry Component
 * @return Vue Component Instance
 * @version 1.0.0
 */
const _resolveComponent = (key, $parent) => {
    let constructor = Vue.component(key);
    return createInstance(constructor, $parent);
};

const createMountTarget = (options = {}) => {
    const constructor = Vue.extend(ModalWindow);
    const winIns = new constructor(options);
    winIns.$mount();
    return winIns;
};

// const a = () => {};

const appendChild = (parent, chid) => {
    if (parent === null || parent === undefined) {
        throw new Error('parent ele is required');
    }
    let _parent = parent;
    if (isString(parent)) {
        _parent = document.querySelector(parent);
    }
    _parent.appendChild(chid);
};

export default {
    open(componentKey, options) {
        const _opts = Object.assign(
            {},
            {
                backdrop: true,
                container: 'body',
                keyboard: true,
                size: '',
                windowClass: ''
            },
            options
        );
        let container = document.querySelector(_opts.container);

        if (container === null) {
            console.error(
                'the target {%s} is not exist, will fallback to {body} ',
                _opts.container
            );
            throw new Error(
                `The specified modal container "${
                    _opts.container
                }" was not found in the DOM.`
            );
        }

        let windowCmptRef;
        let contentRef;
        let backdropCmptRef;

        const propsData = this.__applyOptions(_opts);
        windowCmptRef = createMountTarget({
            propsData,
            provide: {
                modalRef: {
                    close(result) {
                        vModalRef.close(result);
                    },
                    dismiss(reason) {
                        vModalRef.dismiss(reason);
                    }
                }
            }
        });
        windowCmptRef.$on('dismiss', data => {
            vModalRef.dismiss(data);
        });

        const _BackdropConct = Vue.extend(ModalBackdrop);
        backdropCmptRef = new _BackdropConct();
        backdropCmptRef.$mount();
        appendChild(container, backdropCmptRef.$el);

        switch (true) {
            case isObject(componentKey):
                contentRef = _resolveConstructor(componentKey, windowCmptRef);
                break;
            case isString(componentKey):
                contentRef = _resolveComponent(componentKey, windowCmptRef);
                break;
        }
        contentRef.$parent = windowCmptRef;

        windowCmptRef.provide = {
            modalRef: {
                close(result) {
                    vModalRef.close(result);
                },
                dimiss(reason) {
                    vModalRef.dismiss(reason);
                }
            }
        };

        var vModalRef = new VModalRef(
            windowCmptRef,
            contentRef,
            backdropCmptRef
        );

        contentRef.$mount();
        appendChild(windowCmptRef.$refs.content, contentRef.$el);

        appendChild(container, windowCmptRef.$el);

        return vModalRef;
    },

    __applyOptions(options) {
        let propsData = {};
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(optionName => {
            if (
                options[optionName] !== undefined ||
                options[optionName] !== null
            ) {
                propsData[optionName] = options[optionName];
            }
        });
        return propsData;
    }
};
