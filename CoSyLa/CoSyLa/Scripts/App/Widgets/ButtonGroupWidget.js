var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ButtonGroupWidget = (function (_super) {
    __extends(ButtonGroupWidget, _super);
    function ButtonGroupWidget() {
        _super.apply(this, arguments);
        this._buttonsList = new Array();
    }
    ButtonGroupWidget.prototype.Draw = function (parent) {
        var buttonGroupElem = document.createElement("div");
        buttonGroupElem.classList.add("btn-group");
        return buttonGroupElem;
    };
    ButtonGroupWidget.prototype.AddButton = function (newButton) {
        var button = newButton;
        if (!button)
            button = new ButtonWidget();
        this.AddChildWidget(button);
        this._buttonsList.push(button);
    };
    Object.defineProperty(ButtonGroupWidget.prototype, "Buttons", {
        get: function () {
            return this._buttonsList;
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupWidget.prototype.InitWidget = function () {
        this.HorizontalSizePolice = SizePolice.Minimum;
        this.VerticalSizePolice = SizePolice.Expanding;
    };
    return ButtonGroupWidget;
}(Widget));
