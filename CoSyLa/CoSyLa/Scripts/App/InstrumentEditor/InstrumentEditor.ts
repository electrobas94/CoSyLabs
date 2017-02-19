class InstrumentEditor
{
	 w: TabWidget;
    constructor() {
        this.w = new TabWidget(document.getElementById("mainWindow"));
		  this.w.AddTab("Визуальный редактор");
		  this.w.AddTab("Редактор логики");
		  this.w.AddTab("Общие настройки");

		  let but = new ButtonWidget();
		  but.Text = "Жмякни";

		  let butGroup: ButtonGroupWidget = new ButtonGroupWidget();
		  butGroup.AddButton();
		  butGroup.AddButton();
		  butGroup.AddButton();

		  this.w.AddWidgetOnTab(0, but);
		  this.w.AddWidgetOnTab(0, butGroup);
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();