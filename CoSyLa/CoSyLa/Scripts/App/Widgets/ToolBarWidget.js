var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToolBarWidget = (function (_super) {
    __extends(ToolBarWidget, _super);
    function ToolBarWidget() {
        _super.apply(this, arguments);
        this._buttonGroupList = new Array();
    }
    ToolBarWidget.prototype.Draw = function (parent) {
        var toolBar = document.createElement("div");
        toolBar.classList.add("btn-toolbar");
        if (parent)
            parent.appendChild(toolBar);
        else
            document.body.appendChild(toolBar);
        return toolBar;
    };
    ToolBarWidget.prototype.AddToolGroup = function (newToolGroup) {
        var toolGroup = newToolGroup;
        if (!toolGroup)
            toolGroup = new ButtonGroupWidget();
        this.AddChildWidget(toolGroup);
        this._buttonGroupList.push(toolGroup);
    };
    Object.defineProperty(ToolBarWidget.prototype, "ToolGroup", {
        get: function () {
            return this._buttonGroupList;
        },
        enumerable: true,
        configurable: true
    });
    return ToolBarWidget;
}(Widget));
