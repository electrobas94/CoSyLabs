class InstrumentEditor
{
	 w: TabWidget;
    constructor()
	 {

		  let mainWindow = new MainWidget();
        this.w = new TabWidget(mainWindow);
		  this.w.AddTab("Визуальный редактор");
		  this.w.AddTab("Редактор логики");
		  this.w.AddTab("Общие настройки");

		  let w: Widget = new Widget();
		  let w2: Widget = new Widget();

		  this.w.AddWidgetOnTab(0, w);
		  this.w.AddWidgetOnTab(0, w2);

		  w.Width = 77;
		  w2.Width = 23;

		  let tab: TabWidget = new TabWidget(w2);
		  tab.AddTab("Элементы");
		  tab.AddTab("Свойства");
		  tab.AddTab("Инспектор");

		  let itemWidget: ItemListWidget = new ItemListWidget();

		  itemWidget.CreateNewItem("dsfsdf");
		  itemWidget.CreateNewItem("dsfsdf");
		  itemWidget.CreateNewItem("dsfsdf");
		  itemWidget.CreateNewItem("dsfsdf");

		  tab.AddWidgetOnTab(0, itemWidget);
		  let w22: Widget = new Widget();
		  w22.Text = "sdfsdf";
		  tab.AddWidgetOnTab(1, w22);

		  let toolBar: ToolBarWidget = new ToolBarWidget(w);
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
		  canvas.DomElement.id = "main_canvas_container";
		  //canvas.Text = "3d canvas";
		  canvas.Height = 95;
		  canvas.DomElement.style.backgroundColor = "#c5c5c5";
		  w.AddChildWidget(canvas);

		  this.w.Height = 100;

		  blend4WebEngine.Init();
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();