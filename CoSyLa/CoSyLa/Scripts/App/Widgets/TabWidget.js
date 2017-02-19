var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TabWidget = (function (_super) {
    __extends(TabWidget, _super);
    function TabWidget() {
        _super.apply(this, arguments);
        this.countTabs = -1;
    }
    TabWidget.prototype.AddTab = function (title) {
        var _this = this;
        var menuTab = this._elementDom.children[0];
        if (!menuTab)
            return;
        this.countTabs++;
        var menuItem = this.NewTabItemView(title);
        var onItemMenuClick = function () {
            var index = _this.countTabs;
            return function () { _this.SelectTab(index); };
        };
        menuItem.addEventListener("click", onItemMenuClick(), false);
        menuTab.appendChild(menuItem);
    };
    TabWidget.prototype.SelectTab = function (index) {
        if (index < 0 || index > this.countTabs)
            return;
        var menuTab = this._elementDom.children[0];
        for (var i = 0; i < menuTab.children.length; i++)
            menuTab.children[i].classList.remove("active");
        menuTab.children[index].classList.add("active");
    };
    TabWidget.prototype.Draw = function (parent) {
        var tabWidget = document.createElement("div");
        var menuTab = this.CreateMenuTabs();
        tabWidget.appendChild(menuTab);
        if (parent)
            parent.appendChild(tabWidget);
        else
            document.body.appendChild(tabWidget);
        return tabWidget;
    };
    TabWidget.prototype.CreateMenuTabs = function () {
        var menuTab = document.createElement("ul");
        menuTab.classList.add("nav");
        menuTab.classList.add("nav-tabs");
        return menuTab;
    };
    TabWidget.prototype.NewTabItemView = function (tabTitle) {
        var tabItem = document.createElement("li");
        tabItem.appendChild(document.createElement("a"));
        tabItem.firstElementChild.innerHTML = tabTitle;
        return tabItem;
    };
    return TabWidget;
}(Widget));
