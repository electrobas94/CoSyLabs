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

		  let butGroup2: ButtonGroupWidget = new ButtonGroupWidget();
		  butGroup2.AddButton();
		  butGroup2.AddButton();
		  butGroup2.AddButton();

		  let toolBar: ToolBarWidget = new ToolBarWidget();
		  toolBar.AddToolGroup(butGroup);
		  toolBar.AddToolGroup(butGroup2);

		  toolBar.Height = 4;

		  //this.w.AddWidgetOnTab(0, but);
		  this.w.AddWidgetOnTab(0, toolBar);
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();