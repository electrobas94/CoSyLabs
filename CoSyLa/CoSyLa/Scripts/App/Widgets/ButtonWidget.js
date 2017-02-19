var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ButtonWidget = (function (_super) {
    __extends(ButtonWidget, _super);
    function ButtonWidget() {
        _super.apply(this, arguments);
    }
    ButtonWidget.prototype.Draw = function (parent) {
        var buttonWidget = document.createElement("button");
        buttonWidget.classList.add("btn");
        buttonWidget.classList.add("btn-default");
        if (parent)
            parent.appendChild(buttonWidget);
        else
            document.body.appendChild(buttonWidget);
        return buttonWidget;
    };
    ButtonWidget.prototype.InitWidget = function () {
        this.MeasureUnits = "px";
        this.Height = 40;
        this.Width = 40;
    };
    return ButtonWidget;
}(Widget));
;
