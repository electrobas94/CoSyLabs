/*
	 Base element interface class
*/
class Widget
{
	 //
	 // Properties
	 //
	 protected _elementDom: HTMLElement = null;

	 // Geometry properties
	 protected _width:  number = 100;
	 protected _height: number = 100;
	 protected _horizontalPosition: number = 0;
	 protected _verticalPosition:   number = 0;

	 // Default measure units for size and position DOM element
	 protected _defaultUnits: string = "%";

	 //
	 // Action-properties
	 //
	 private _lastEvent: Event  = null;
	 private _onClick: Function = () => {};

	 //
	 // Public methods
	 //
	 constructor(parent?: Widget)
	 {
		  this._elementDom = this.Draw();
		  this.InitWidget();

		  if (parent)
				parent.AddChildWidget(this);

		  this._elementDom.addEventListener("click",
													 (event: Event) => {
														  this._lastEvent = event;
														  this._onClick();
														  this._lastEvent = null; });
	 }

	 AddChildWidget(widget: Widget): void {
		  this._elementDom.appendChild(widget.DomElement);
	 }

    Draw(): HTMLElement
    {
		  var widget = document.createElement("div");
		  widget.classList.add("widget");

		  return widget;
    }

    Show(): void {
		  this._elementDom.style.display = "auto";
    }

    Hide(): void {
		  this._elementDom.style.display = "none";
    }

	 Remove(): void {
		  if (this._elementDom)
				this._elementDom.remove();
    }

	 //
	 // Getters
	 //
	 get DomElement(): HTMLElement {
		  return this._elementDom;
    }

	 get VerticalPosition(): number {
		  return this._verticalPosition;
	 }

	 get Width(): number {
		  return this._width;
	 }

	 get Height(): number {
		  return this._width;
	 }

	 //
	 // Setters
	 //
	 set MeasureUnits(unitsType: string)
	 {
		  if (!unitsType || unitsType.length > 2 || unitsType.length == 0)
				return;

		  this._defaultUnits = unitsType;
	 }

	 set Width(newSize: number)
	 {
		  this._width = newSize;
		  this.UpdateDomGeometry();
	 }

	 set VerticalPosition(newPosition: number) {
		  this._verticalPosition = newPosition;
	 }

	 set Height(newSize: number)
	 {
		  this._height = newSize;
		  this.UpdateDomGeometry();
	 }

	 set Text(newText: string) {
		  this._elementDom.innerText = newText;
	 }

	 set OnClick(clickMethod: Function) {
		  this._onClick = clickMethod;
	 }

	 //
	 // Private or protected method
	 //
	 private UpdateDomGeometry(): void
	 {
		  if (this._elementDom)
		  {
				this._elementDom.style.top   = this._verticalPosition.toString()   + this._defaultUnits;
				this._elementDom.style.right = this._horizontalPosition.toString() + this._defaultUnits;

				this._elementDom.style.width  = this._width.toString()  + this._defaultUnits;
				this._elementDom.style.height = this._height.toString() + this._defaultUnits;
		  }
	 }

	 protected InitWidget(): void
	 {
	 }
};