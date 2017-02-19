class InstrumentEditor
{
	 w: TabWidget;
    constructor() {
        this.w = new TabWidget(document.getElementById("mainWindow"));
		  this.w.AddTab("Визуальный редактор");
		  this.w.AddTab("Редактор логики");
		  this.w.AddTab("Общие настройки");
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();