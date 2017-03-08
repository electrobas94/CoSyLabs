enum TransformTools  { Pointer, Mover, Rotater, Scaler };

class TransformMenu extends ButtonGroupWidget
{
	 private _CurrentTool: TransformTools = TransformTools.Pointer;

	 constructor(parent?: Widget)
	 {
		  super(parent);

		  this.AddButton();
		  this.AddButton();
		  this.AddButton();
		  this.AddButton();

		  this.Buttons[0].AddClassStyle("select-button");
		  this.Buttons[1].AddClassStyle("move-button");
		  this.Buttons[2].AddClassStyle("rotate-button");
		  this.Buttons[3].AddClassStyle("scale-button");

		  this.Buttons[0].OnClick = () => { this.SelectPointer(); };
		  this.Buttons[1].OnClick = () => { this.SelectPointer(); };
		  this.Buttons[2].OnClick = () => { this.SelectPointer(); };
		  this.Buttons[3].OnClick = () => { this.SelectPointer(); };
	 }

	 private SelectPointer(): void
	 {
		  this._CurrentTool = TransformTools.Pointer;
	 }

	 private SelectGraber(): void
	 {
		  this._CurrentTool = TransformTools.Mover;
	 }

	 private SelectRotater(): void
	 {
		  this._CurrentTool = TransformTools.Rotater;
	 }

	 private SelectScaler(): void
	 {
		  this._CurrentTool = TransformTools.Scaler;
	 }
};