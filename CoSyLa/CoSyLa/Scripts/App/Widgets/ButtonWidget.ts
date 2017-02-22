class ButtonWidget extends Widget
{
    Draw(parent?: HTMLElement): HTMLElement
	 {
		  let buttonWidget = document.createElement("button");

		  buttonWidget.classList.add("btn");
		  buttonWidget.classList.add("btn-default");

		  return buttonWidget;
    }

	 protected InitWidget(): void
	 {
		  this.MeasureUnits = "px";
		  this.Height = 40;
		  this.Width = 40;
	 }
};