var Widget = (function () {
    function Widget(parent) {
        var _this = this;
        this._elementDom = null;
        this._width = 100;
        this._height = 100;
        this._horizontalPosition = 0;
        this._verticalPosition = 0;
        this._defaultUnits = "%";
        this._lastEvent = null;
        this._onClick = function () { };
        this._elementDom = this.Draw(parent);
        this.InitWidget();
        this._elementDom.addEventListener("click", function (event) {
            _this._lastEvent = event;
            _this._onClick();
            _this._lastEvent = null;
        });
    }
    Widget.prototype.AddChildWidget = function (widget) {
        this._elementDom.appendChild(widget.DomElement);
    };
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
    Widget.prototype.Remove = function () {
        if (this._elementDom)
            this._elementDom.remove();
    };
    Object.defineProperty(Widget.prototype, "DomElement", {
        get: function () {
            return this._elementDom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "VerticalPosition", {
        get: function () {
            return this._verticalPosition;
        },
        set: function (newPosition) {
            this._verticalPosition = newPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "Width", {
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
    Object.defineProperty(Widget.prototype, "Height", {
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
    Object.defineProperty(Widget.prototype, "MeasureUnits", {
        set: function (unitsType) {
            if (!unitsType || unitsType.length > 2 || unitsType.length == 0)
                return;
            this._defaultUnits = unitsType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "Text", {
        set: function (newText) {
            this._elementDom.innerText = newText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "OnClick", {
        set: function (clickMethod) {
            this._onClick = clickMethod;
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
    Widget.prototype.InitWidget = function () {
    };
    return Widget;
}());
;
