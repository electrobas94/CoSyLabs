var InstrumentEditor = (function () {
    function InstrumentEditor() {
        this.w = new TabWidget(document.getElementById("mainWindow"));
        this.w.AddTab("Визуальный редактор");
        this.w.AddTab("Редактор логики");
        this.w.AddTab("Общие настройки");
        var but = new ButtonWidget();
        but.Text = "Жмякни";
        var butGroup = new ButtonGroupWidget();
        butGroup.AddButton();
        butGroup.AddButton();
        butGroup.AddButton();
        var butGroup2 = new ButtonGroupWidget();
        butGroup2.AddButton();
        butGroup2.AddButton();
        butGroup2.AddButton();
        var toolBar = new ToolBarWidget();
        toolBar.AddToolGroup(butGroup);
        toolBar.AddToolGroup(butGroup2);
        this.w.AddWidgetOnTab(0, toolBar);
    }
    return InstrumentEditor;
}());
var instrumentEditor = new InstrumentEditor();
