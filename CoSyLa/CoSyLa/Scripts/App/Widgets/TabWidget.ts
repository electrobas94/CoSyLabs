class TabWidget extends Widget
{
	 protected countTabs:    number = -1;
	 protected _selectIndex: number = -1;

	 protected _tabsContent: HTMLElement[];

	 AddWidgetOnTab(tabIndex: number, widget: Widget): void
	 {
		  if (tabIndex < 0 || tabIndex > this.countTabs)
				return;

		  this._tabsContent[tabIndex].appendChild(widget.GetDom());
	 }

	 AddTab(title: string): void
	 {
		  let menuTab = this._elementDom.children[0];

		  if (!menuTab)
				return;

		  this.countTabs++;

		  let menuItem = this.NewMenuItem(title);
		  this.NewTab();

		  if (this.countTabs == 0)
				this.SelectTab(0);

		  // Closures for save index every tab 0, 1, 2, 3
		  let onItemMenuClick = () => {
				let index = this.countTabs;
				return () => { this.SelectTab(index)}
		  }

		  menuItem.addEventListener("click", onItemMenuClick(), false);
		  menuTab.appendChild(menuItem);
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
		  this._tabsContent[index].style.display = "auto";

		  this._selectIndex = index;
		  
	 }

    Draw(parent?: HTMLElement): HTMLElement
	 {
		  let tabWidget = document.createElement("div");
		  let menuTab   = this.CreateMenuTabs();

		  tabWidget.appendChild(menuTab);

        if (parent)
				parent.appendChild(tabWidget);
		  else
				document.body.appendChild(tabWidget);

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