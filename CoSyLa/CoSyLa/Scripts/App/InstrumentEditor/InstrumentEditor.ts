class InstrumentEditor
{
	 w: TabWidget;
    constructor()
	 {

        this.w = new TabWidget(document.getElementById("mainWindow"));
		  this.w.AddTab("Визуальный редактор");
		  this.w.AddTab("Редактор логики");
		  this.w.AddTab("Общие настройки");

		  let w: Widget = new Widget();
		  let w2: Widget = new Widget();

		  this.w.AddWidgetOnTab(0, w);
		  this.w.AddWidgetOnTab(0, w2);

		  w.Width = 77;
		  w2.Width = 23;
		  w.Height = 100;
		  w2.Height = 100; 

		  let tab: TabWidget = new TabWidget(w2.DomElement);
		  tab.AddTab("Элементы");
		  tab.AddTab("Свойства");
		  tab.AddTab("Инспектор");

		  let toolBar: ToolBarWidget = new ToolBarWidget(w.DomElement);
		  toolBar.Height = 5;

		  toolBar.AddToolGroup();
		  toolBar.AddToolGroup();

		  toolBar.ToolGroup[0].AddButton();
		  toolBar.ToolGroup[0].AddButton();
		  toolBar.ToolGroup[0].AddButton();

		  toolBar.ToolGroup[1].AddButton();
		  toolBar.ToolGroup[1].AddButton();
		  toolBar.ToolGroup[1].AddButton();

		  let canvas: Widget = new Widget();
		  canvas.Height = 95;
		  canvas.DomElement.style.backgroundColor = "#c5c5c5";
		  w.AddChildWidget(canvas);

		  this.w.Height = 100;
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();