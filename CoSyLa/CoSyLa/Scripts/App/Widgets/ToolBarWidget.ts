class ToolBarWidget extends Widget {
	 private _buttonGroupList: ButtonGroupWidget[] = new Array();

	 Draw(parent?: HTMLElement): HTMLElement {
		  let toolBar = document.createElement("div");

		  toolBar.classList.add("btn-toolbar");

		  return toolBar;
    }

	 AddToolGroup(newToolGroup?: ButtonGroupWidget) {
		  let toolGroup: ButtonGroupWidget = newToolGroup;

		  if (!toolGroup)
				toolGroup = new ButtonGroupWidget();

		  this.AddChildWidget(toolGroup);
		  this._buttonGroupList.push(toolGroup);
	 }

	 get ToolGroup(): Array<ButtonGroupWidget> {
		  return this._buttonGroupList;
	 }
}