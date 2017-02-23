class ItemListWidget extends Widget
{
	 _buttonItems: ButtonWidget[] = new Array();
	 
	 Draw(): HTMLElement
	 {
		  let itemList = document.createElement("div");

		  itemList.classList.add("list-group");

		  return itemList;
	 }

	 CreateNewItem(title?: string)
	 {
		  let item = new ButtonWidget();
		  item.AddClassStyle("list-group-item");

		  item.HorizontalSizePolice = SizePolice.Expanding;

		  if (title)
				item.Text = title;

		  this.AddChildWidget(item);
		  this._buttonItems.push(item);
	 }
}