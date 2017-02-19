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
        if (parent)
            parent.appendChild(buttonGroupElem);
        else
            document.body.appendChild(buttonGroupElem);
        return buttonGroupElem;
    };
    ButtonGroupWidget.prototype.AddButton = function (newButton) {
        var button = newButton;
        if (!button)
            button = new ButtonWidget();
        this.AddChildWidget(button);
        this._buttonsList.push(button);
    };
    return ButtonGroupWidget;
}(Widget));
