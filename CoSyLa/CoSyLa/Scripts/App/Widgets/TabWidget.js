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
        this._selectIndex = -1;
        this._tabsContent = new Array();
    }
    TabWidget.prototype.AddWidgetOnTab = function (tabIndex, widget) {
        if (tabIndex < 0 || tabIndex > this.countTabs)
            return;
        this._tabsContent[tabIndex].appendChild(widget.DomElement);
    };
    TabWidget.prototype.AddTab = function (title) {
        var _this = this;
        var menuTab = this._elementDom.children[0];
        if (!menuTab)
            return;
        this.countTabs++;
        var menuItem = this.NewMenuItem(title);
        this.NewTab();
        var onItemMenuClick = function () {
            var index = _this.countTabs;
            return function () { _this.SelectTab(index); };
        };
        menuItem.addEventListener("click", onItemMenuClick(), false);
        menuTab.appendChild(menuItem);
        if (this.countTabs == 0)
            this.SelectTab(0);
    };
    TabWidget.prototype.SelectTab = function (index) {
        if (index < 0 || index > this.countTabs)
            return;
        var menuTab = this._elementDom.children[0];
        if (this._selectIndex != -1) {
            menuTab.children[this._selectIndex].classList.remove("active");
            this._tabsContent[this._selectIndex].style.display = "none";
        }
        menuTab.children[index].classList.add("active");
        this._tabsContent[index].style.display = "block";
        this._selectIndex = index;
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
    TabWidget.prototype.NewMenuItem = function (tabTitle) {
        var tabItem = document.createElement("li");
        tabItem.appendChild(document.createElement("a"));
        tabItem.firstElementChild.innerHTML = tabTitle;
        return tabItem;
    };
    TabWidget.prototype.NewTab = function () {
        var tab = document.createElement("div");
        tab.classList.add("tab-content");
        tab.style.display = "none";
        this._tabsContent.push(tab);
        this._elementDom.appendChild(tab);
    };
    return TabWidget;
}(Widget));
