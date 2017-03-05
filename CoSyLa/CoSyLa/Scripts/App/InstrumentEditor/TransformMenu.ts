class TransformMenu extends ButtonGroupWidget
{
	 constructor(parent?: Widget)
	 {
		  super(parent);

		  this.AddButton();
		  this.AddButton();
		  this.AddButton();
		  this.AddButton();

		  this.Buttons[0].AddClassStyle("select-button");
		  this.Buttons[0].AddClassStyle("move-button");
		  this.Buttons[0].AddClassStyle("rotate-button");
		  this.Buttons[0].AddClassStyle("scale-button");
	 }
};