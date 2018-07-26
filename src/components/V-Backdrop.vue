<template>
    <div class="modal-backdrop fade show" role="dialog">
    </div>
</template>
<script>
export default {
    name: 'ModalBackdrop',
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}

.modal-backdrop.fade {
    opacity: 0;
}

.modal-backdrop.show {
    opacity: 0.5;
}

.modal-backdrop.fade.show:not(:first-child) {
    z-index: 1050;
}
</style>

