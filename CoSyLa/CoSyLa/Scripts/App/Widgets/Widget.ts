/*
	 Base element interface class
*/
class Widget
{
    protected _elementDom: HTMLElement = null;

	 // Geometry properties
	 protected _width: number = 100;
	 protected _height: number = 100;
	 protected _horizontalPosition: number = 0;
	 protected _verticalPosition: number = 0;

	 // Default measure units for size and position DOM element
	 protected _defaultUnits: string = "px";

	 constructor(parent?: HTMLElement)
	 {
		  this._elementDom = this.Draw(parent);
		  this.UpdateDomGeometry();
	 }

    Draw(parent?: HTMLElement): HTMLElement
    {
		  var widget = document.createElement("div");
		  widget.classList.add("widget");

        if (parent)
				parent.appendChild(widget);
		  else
				document.body.appendChild(widget);

		  return widget;
    }

    Show(): void
    {
		  this._elementDom.style.display = "auto";
    }

    Hide(): void
    {
		  this._elementDom.style.display = "hidden";
    }

	 GetDom(): HTMLElement
    {
		  return this._elementDom;
    }

	 Remove(): void
    {
		  if (this._elementDom)
				this._elementDom.remove();
    }

	 get verticalPosition(): number
	 {
		  return this._verticalPosition;
	 }

	 set verticalPosition(newPosition: number)
	 {
		  this._verticalPosition = newPosition;
	 }

	 get width(): number
	 {
		  return this._width;
	 }

	 set width(newSize: number)
	 {
		  this._width = newSize;
		  this.UpdateDomGeometry();
	 }

	 get height(): number
	 {
		  return this._width;
	 }

	 set height(newSize: number)
	 {
		  this._height = newSize;
		  this.UpdateDomGeometry();
	 }

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
};