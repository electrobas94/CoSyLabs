class TabWidget extends Widget
{
	 protected countTabs:    number = -1;
	 protected _selectIndex: number = -1;

	 protected _tabsContent: HTMLElement[] = new Array();

	 AddWidgetOnTab(tabIndex: number, widget: Widget): void
	 {
		  if (tabIndex < 0 || tabIndex > this.countTabs)
				return;

		  this._tabsContent[tabIndex].appendChild(widget.DomElement);
	 }

	 AddTab(title: string): void
	 {
		  let menuTab = this._elementDom.children[0];

		  if (!menuTab)
				return;

		  this.countTabs++;

		  let menuItem = this.NewMenuItem(title);
		  this.NewTab();

		  // Closures for save index every tab 0, 1, 2, 3
		  let onItemMenuClick = () => {
				let index = this.countTabs;
				return () => { this.SelectTab(index)}
		  }

		  menuItem.addEventListener("click", onItemMenuClick(), false);
		  menuTab.appendChild(menuItem);

		  if (this.countTabs == 0)
				this.SelectTab(0);
	 }

	 SelectTab(index: number): void
	 {
		  if (index < 0 || index > this.countTabs)
				return;

		  let menuTab: HTMLElement = <HTMLElement>this._elementDom.children[0];

		  if (this._selectIndex != -1)
		  {
				menuTab.children [this._selectIndex].classList.remove("active");
				this._tabsContent[this._selectIndex].style.display = "none";
		  }

		  menuTab.children [index].classList.add("active");
		  this._tabsContent[index].style.display = "block";

		  this._selectIndex = index;
		  
	 }

    Draw(): HTMLElement
	 {
		  let tabWidget = document.createElement("div");
		  let menuTab = this.CreateMenuTabs();
		  tabWidget.classList.add("TabWidget");

		  tabWidget.appendChild(menuTab);

		  return tabWidget;
    }

	 private CreateMenuTabs(): HTMLElement
	 {
		  let menuTab = document.createElement("ul");

		  menuTab.classList.add("nav");
		  menuTab.classList.add("nav-tabs");

		  return menuTab;
	 }

	 private NewMenuItem(tabTitle: string): HTMLElement
	 {
		  let tabItem = document.createElement("li");
		  tabItem.appendChild(document.createElement("a"));
		  tabItem.firstElementChild.innerHTML = tabTitle;

		  return tabItem;
	 }

	 private NewTab(): void
	 {
		  let tab: HTMLElement = document.createElement("div");

		  tab.classList.add("tab-content");
		  tab.style.display = "none";

		  this._tabsContent.push(tab);
		  this._elementDom.appendChild(tab);
	 }
}