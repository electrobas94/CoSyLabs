var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TransformMenu = (function (_super) {
    __extends(TransformMenu, _super);
    function TransformMenu(parent) {
        _super.call(this, parent);
        this.AddButton();
        this.AddButton();
        this.AddButton();
        this.AddButton();
        this.Buttons[0].AddClassStyle("select-button");
        this.Buttons[0].AddClassStyle("move-button");
        this.Buttons[0].AddClassStyle("rotate-button");
        this.Buttons[0].AddClassStyle("scale-button");
    }
    return TransformMenu;
}(ButtonGroupWidget));
;
