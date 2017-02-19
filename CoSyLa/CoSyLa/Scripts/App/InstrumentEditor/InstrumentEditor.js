var InstrumentEditor = (function () {
    function InstrumentEditor() {
        this.w = new TabWidget(document.getElementById("mainWindow"));
        this.w.AddTab("Визуальный редактор");
        this.w.AddTab("Редактор логики");
        this.w.AddTab("Общие настройки");
        var w = new Widget();
        var w2 = new Widget();
        this.w.AddWidgetOnTab(0, w);
        this.w.AddWidgetOnTab(0, w2);
        w.Width = 77;
        w2.Width = 23;
        w.Height = 100;
        w2.Height = 100;
        var tab = new TabWidget(w2.DomElement);
        tab.AddTab("Элементы");
        tab.AddTab("Свойства");
        tab.AddTab("Инспектор");
        var toolBar = new ToolBarWidget(w.DomElement);
        toolBar.Height = 5;
        toolBar.AddToolGroup();
        toolBar.AddToolGroup();
        toolBar.ToolGroup[0].AddButton();
        toolBar.ToolGroup[0].AddButton();
        toolBar.ToolGroup[0].AddButton();
        toolBar.ToolGroup[1].AddButton();
        toolBar.ToolGroup[1].AddButton();
        toolBar.ToolGroup[1].AddButton();
        var canvas = new Widget();
        canvas.Height = 95;
        canvas.DomElement.style.backgroundColor = "#c5c5c5";
        w.AddChildWidget(canvas);
        this.w.Height = 100;
    }
    return InstrumentEditor;
}());
var instrumentEditor = new InstrumentEditor();
