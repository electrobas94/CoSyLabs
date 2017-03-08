var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TransformTools;
(function (TransformTools) {
    TransformTools[TransformTools["Pointer"] = 0] = "Pointer";
    TransformTools[TransformTools["Mover"] = 1] = "Mover";
    TransformTools[TransformTools["Rotater"] = 2] = "Rotater";
    TransformTools[TransformTools["Scaler"] = 3] = "Scaler";
})(TransformTools || (TransformTools = {}));
;
var TransformMenu = (function (_super) {
    __extends(TransformMenu, _super);
    function TransformMenu(parent) {
        var _this = this;
        _super.call(this, parent);
        this._CurrentTool = TransformTools.Pointer;
        this.AddButton();
        this.AddButton();
        this.AddButton();
        this.AddButton();
        this.Buttons[0].AddClassStyle("select-button");
        this.Buttons[1].AddClassStyle("move-button");
        this.Buttons[2].AddClassStyle("rotate-button");
        this.Buttons[3].AddClassStyle("scale-button");
        this.Buttons[0].OnClick = function () { _this.SelectPointer(); };
        this.Buttons[1].OnClick = function () { _this.SelectPointer(); };
        this.Buttons[2].OnClick = function () { _this.SelectPointer(); };
        this.Buttons[3].OnClick = function () { _this.SelectPointer(); };
    }
    TransformMenu.prototype.SelectPointer = function () {
        this._CurrentTool = TransformTools.Pointer;
    };
    TransformMenu.prototype.SelectGraber = function () {
        this._CurrentTool = TransformTools.Mover;
    };
    TransformMenu.prototype.SelectRotater = function () {
        this._CurrentTool = TransformTools.Rotater;
    };
    TransformMenu.prototype.SelectScaler = function () {
        this._CurrentTool = TransformTools.Scaler;
    };
    return TransformMenu;
}(ButtonGroupWidget));
;
