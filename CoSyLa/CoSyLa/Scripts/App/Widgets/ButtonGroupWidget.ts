class ButtonGroupWidget extends Widget
{
	 private _buttonsList: ButtonWidget[] = new Array();

	 Draw(parent?: HTMLElement): HTMLElement {
		  let buttonGroupElem = document.createElement("div");

		  buttonGroupElem.classList.add("btn-group");

		  return buttonGroupElem;
    }

	 AddButton(newButton?: ButtonWidget)
	 {
		  let button: ButtonWidget = newButton;

		  if (!button)
				button = new ButtonWidget();

		  this.AddChildWidget(button);
		  this._buttonsList.push(button);
	 }

	 get Buttons(): Array<ButtonWidget> {
		  return this._buttonsList;
	 }
}