var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainWidget = (function (_super) {
    __extends(MainWidget, _super);
    function MainWidget(parent) {
        _super.call(this);
        this.DomElement.id = "MainWidget";
        document.body.appendChild(this.DomElement);
    }
    return MainWidget;
}(Widget));
