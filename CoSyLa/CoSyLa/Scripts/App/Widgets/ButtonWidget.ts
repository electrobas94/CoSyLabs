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
		  this.HorizontalMeasureUnits = "vh";
		  this.VerticalMeasureUnits = "vh";
		  this.Height = 4;
		  this.Width  = 4;
	 }
};