class InstrumentEditor
{
	 w: TabWidget;
    constructor() {
        this.w = new TabWidget(document.getElementById("mainWindow"));
		  this.w.AddTab("bla bla");
		  this.w.AddTab("bla bla");
		  this.w.AddTab("bla bla");
		  this.w.AddTab("bla bla");
		  this.w.AddTab("bla bla");

		  this.w.SelectTab(2);
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();