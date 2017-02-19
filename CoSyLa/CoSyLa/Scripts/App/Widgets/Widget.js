var Widget = (function () {
    function Widget(parent) {
        this._elementDom = null;
        this._width = 100;
        this._height = 100;
        this._horizontalPosition = 0;
        this._verticalPosition = 0;
        this._defaultUnits = "%";
        this._elementDom = this.Draw(parent);
        this.UpdateDomGeometry();
    }
    Widget.prototype.Draw = function (parent) {
        var widget = document.createElement("div");
        widget.classList.add("widget");
        if (parent)
            parent.appendChild(widget);
        else
            document.body.appendChild(widget);
        return widget;
    };
    Widget.prototype.Show = function () {
        this._elementDom.style.display = "auto";
    };
    Widget.prototype.Hide = function () {
        this._elementDom.style.display = "none";
    };
    Widget.prototype.GetDom = function () {
        return this._elementDom;
    };
    Widget.prototype.Remove = function () {
        if (this._elementDom)
            this._elementDom.remove();
    };
    Object.defineProperty(Widget.prototype, "verticalPosition", {
        get: function () {
            return this._verticalPosition;
        },
        set: function (newPosition) {
            this._verticalPosition = newPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (newSize) {
            this._width = newSize;
            this.UpdateDomGeometry();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "height", {
        get: function () {
            return this._width;
        },
        set: function (newSize) {
            this._height = newSize;
            this.UpdateDomGeometry();
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.UpdateDomGeometry = function () {
        if (this._elementDom) {
            this._elementDom.style.top = this._verticalPosition.toString() + this._defaultUnits;
            this._elementDom.style.right = this._horizontalPosition.toString() + this._defaultUnits;
            this._elementDom.style.width = this._width.toString() + this._defaultUnits;
            this._elementDom.style.height = this._height.toString() + this._defaultUnits;
        }
    };
    return Widget;
}());
;
