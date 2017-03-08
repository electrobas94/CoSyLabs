/*
	 Base element interface class
*/
enum SizePolice
{
	 Fixed = 1,
	 Expanding,
	 Minimum 
};

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
	 protected _verticalPosition: number = 0;
	 protected _verticalMeasureUnits: string = "vh";
	 protected _horizontalMeasureUnits: string = "%";

	 //
	 // Action-properties
	 //
	 private _lastEvent: Event = null;
	 private _onClick: Function = () => { };
	 private _MouseMove: Function = () => { };

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

		  this._elementDom.addEventListener("mousemove",
				(event: Event) => {
														  this._lastEvent = event;
														  this._MouseMove();
														  this._lastEvent = null;
				});
	 }

	 AddEventHandler( eventName: string, handler: any ): void
	 {
		  this._elementDom.addEventListener( eventName, handler );
	 }

	 AddClassStyle(className: string): void
	 {
		  this.DomElement.classList.add(className);
	 }

	 RemoveClassStyle(className: string): void {
		  this.DomElement.classList.remove(className);
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

	 get LastEvent(): Event {
		  return this._lastEvent;
	 }

	 //
	 // Setters
	 //
	 set VerticalSizePolice(sizePolice: SizePolice)
	 {
		  switch (sizePolice)
		  {
				case SizePolice.Minimum:   this.DomElement.style.height = "auto"; break;
				case SizePolice.Expanding: this.DomElement.style.height = "100%"; break;
				case SizePolice.Fixed:     this.DomElement.style.height = this._height + this._verticalMeasureUnits; break;
		  }
	 }

	 set HorizontalSizePolice(sizePolice: SizePolice) {
		  switch (sizePolice) {
				case SizePolice.Minimum: this.DomElement.style.width = "auto"; break;
				case SizePolice.Expanding: this.DomElement.style.width = "100%"; break;
				case SizePolice.Fixed: this.DomElement.style.height = this._width + this._horizontalMeasureUnits; break;
		  }
	 }

	 set HorizontalMeasureUnits(measureUnits: string) {
		  this._horizontalMeasureUnits = measureUnits;
		  this.DomElement.style.width = this._width + this._horizontalMeasureUnits;
	 }

	 set VerticalMeasureUnits(measureUnits: string) {
		  this._horizontalMeasureUnits = measureUnits;
		  this.DomElement.style.height = this._height + this._verticalMeasureUnits;
	 }

	 set Width(newSize: number)
	 {
		  this._width = newSize;
		  this._elementDom.style.width = this._width.toString() + this._horizontalMeasureUnits;
	 }

	 set VerticalPosition(newPosition: number) {
		  this._verticalPosition = newPosition;
	 }

	 set Height(newSize: number)
	 {
		  this._height = newSize;
		  this._elementDom.style.height = this._height.toString() + this._verticalMeasureUnits;
	 }

	 set Text(newText: string) {
		  this._elementDom.innerText = newText;
	 }

	 set OnClick(clickMethod: Function) {
		  this._onClick = clickMethod;
	 }

	 set MouseMove(clickMethod: Function) {
		  this._MouseMove = clickMethod;
	 }

	 protected InitWidget(): void
	 {
		  this.HorizontalSizePolice = SizePolice.Expanding;
		  this.VerticalSizePolice = SizePolice.Expanding;
	 }
};