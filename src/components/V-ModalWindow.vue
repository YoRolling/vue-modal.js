<template>
    <div class="modal fade show" role="dialog" @keydown.esc="escKey($event)" tabindex="-1" :class="windowClass" @click="backdropClick($event)">
        <div class="modal-dialog" role="document" :class="size ? 'modal-'+size : '' ">
            <div class="modal-content" ref="content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalWindow',
    props: {
        backdrop: Boolean,
        keyboard: Boolean,
        size: {
            type: String,
            validator: function(value) {
                return ['sm', 'lg', ''].indexOf(value) !== -1
            },
            default: ''
        },
        windowClass: [Object, Array, String]
    },
    mounted() {
        if (!this.$el.contains(document.activeElement)) {
            this.$nextTick(() => {
                this.$el.focus()
            })
        }
    },
    methods: {
        escKey($event) {
            if (this.keyboard && !$event.defaultPrevented) {
                this.$emit('dismiss', 1)
            }
        },
        backdropClick($event) {
            if (this.backdrop === true && this.$el === $event.target) {
                this.$emit('dismiss', 2)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.modal,
.modal-open {
    overflow: hidden;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0;
}
.show {
    display: block;
}
.modal.fade .modal-dialog {
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translateY(-25%);
    transform: translateY(-25%);
}

.modal.show .modal-dialog {
    -webkit-transform: translate(0);
    transform: translate(0);
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}

.modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    background-clip: padding-box;
    outline: 0;
}

.modal-header {
    padding: 15px;
    border-bottom: 1px solid #eceeef;
    color: #fff;
}

.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}

.modal-body {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 15px;
    max-height: 600px;
}

.modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #eceeef;
    .button {
        margin-top: 0;
    }
}

.modal-footer > :not(:first-child) {
    margin-left: 0.25rem;
}

.modal-footer > :not(:last-child) {
    margin-right: 0.25rem;
}

.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 30px auto;
    }

    .modal-sm {
        max-width: 300px;
    }
}

@media (min-width: 992px) {
    .modal-lg {
        max-width: 800px;
    }
}
</style>

