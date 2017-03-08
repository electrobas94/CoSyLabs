var SizePolice;
(function (SizePolice) {
    SizePolice[SizePolice["Fixed"] = 1] = "Fixed";
    SizePolice[SizePolice["Expanding"] = 2] = "Expanding";
    SizePolice[SizePolice["Minimum"] = 3] = "Minimum";
})(SizePolice || (SizePolice = {}));
;
var Widget = (function () {
    function Widget(parent) {
        var _this = this;
        this._elementDom = null;
        this._width = 100;
        this._height = 100;
        this._horizontalPosition = 0;
        this._verticalPosition = 0;
        this._verticalMeasureUnits = "vh";
        this._horizontalMeasureUnits = "%";
        this._lastEvent = null;
        this._onClick = function () { };
        this._MouseMove = function () { };
        this._elementDom = this.Draw();
        this.InitWidget();
        if (parent)
            parent.AddChildWidget(this);
        this._elementDom.addEventListener("click", function (event) {
            _this._lastEvent = event;
            _this._onClick();
            _this._lastEvent = null;
        });
        this._elementDom.addEventListener("mousemove", function (event) {
            _this._lastEvent = event;
            _this._MouseMove();
            _this._lastEvent = null;
        });
    }
    Widget.prototype.AddEventHandler = function (eventName, handler) {
        this._elementDom.addEventListener(eventName, handler);
    };
    Widget.prototype.AddClassStyle = function (className) {
        this.DomElement.classList.add(className);
    };
    Widget.prototype.RemoveClassStyle = function (className) {
        this.DomElement.classList.remove(className);
    };
    Widget.prototype.AddChildWidget = function (widget) {
        this._elementDom.appendChild(widget.DomElement);
    };
    Widget.prototype.Draw = function () {
        var widget = document.createElement("div");
        widget.classList.add("widget");
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
            this._elementDom.style.width = this._width.toString() + this._horizontalMeasureUnits;
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
            this._elementDom.style.height = this._height.toString() + this._verticalMeasureUnits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "LastEvent", {
        get: function () {
            return this._lastEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "VerticalSizePolice", {
        set: function (sizePolice) {
            switch (sizePolice) {
                case SizePolice.Minimum:
                    this.DomElement.style.height = "auto";
                    break;
                case SizePolice.Expanding:
                    this.DomElement.style.height = "100%";
                    break;
                case SizePolice.Fixed:
                    this.DomElement.style.height = this._height + this._verticalMeasureUnits;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "HorizontalSizePolice", {
        set: function (sizePolice) {
            switch (sizePolice) {
                case SizePolice.Minimum:
                    this.DomElement.style.width = "auto";
                    break;
                case SizePolice.Expanding:
                    this.DomElement.style.width = "100%";
                    break;
                case SizePolice.Fixed:
                    this.DomElement.style.height = this._width + this._horizontalMeasureUnits;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "HorizontalMeasureUnits", {
        set: function (measureUnits) {
            this._horizontalMeasureUnits = measureUnits;
            this.DomElement.style.width = this._width + this._horizontalMeasureUnits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "VerticalMeasureUnits", {
        set: function (measureUnits) {
            this._horizontalMeasureUnits = measureUnits;
            this.DomElement.style.height = this._height + this._verticalMeasureUnits;
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
    Object.defineProperty(Widget.prototype, "MouseMove", {
        set: function (clickMethod) {
            this._MouseMove = clickMethod;
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.InitWidget = function () {
        this.HorizontalSizePolice = SizePolice.Expanding;
        this.VerticalSizePolice = SizePolice.Expanding;
    };
    return Widget;
}());
;
