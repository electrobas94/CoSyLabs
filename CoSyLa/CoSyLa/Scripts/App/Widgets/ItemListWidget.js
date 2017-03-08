var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemListWidget = (function (_super) {
    __extends(ItemListWidget, _super);
    function ItemListWidget() {
        _super.apply(this, arguments);
        this._buttonItems = new Array();
    }
    ItemListWidget.prototype.Draw = function () {
        var itemList = document.createElement("div");
        itemList.classList.add("list-group");
        return itemList;
    };
    ItemListWidget.prototype.CreateNewItem = function (title) {
        var item = new ButtonWidget();
        item.AddClassStyle("list-group-item");
        item.HorizontalSizePolice = SizePolice.Expanding;
        if (title)
            item.Text = title;
        this.AddChildWidget(item);
        this._buttonItems.push(item);
    };
    return ItemListWidget;
}(Widget));
