export class VModalRef {
    constructor(_windowCmptRef, _contentRef, _backdropCmptRef) {
        this._windowCmptRef = _windowCmptRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._contentRef = _contentRef;
        this.instance = _contentRef;

        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });

        this.result.then(null, () => {});
    }

    close(result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    }

    dismiss(reason) {
        if (this._windowCmptRef) {
            this._reject(reason);
            this._removeModalElements();
        }
    }

    _removeModalElements() {
        if (this._windowCmptRef) {
            this._windowCmptRef.$el.parentNode.removeChild(
                this._windowCmptRef.$el
            );
            this._windowCmptRef.$destroy();
        }

        if (this._contentRef) {
            this._contentRef.$destroy();
        }
        if (this._backdropCmptRef) {
            this._backdropCmptRef.$el.parentNode.removeChild(
                this._backdropCmptRef.$el
            );
            this._backdropCmptRef.$destroy();
        }

        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    }
}
