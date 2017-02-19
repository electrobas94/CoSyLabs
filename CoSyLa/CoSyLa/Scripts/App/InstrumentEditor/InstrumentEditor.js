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
        this.w.AddWidgetOnTab(0, but);
        this.w.AddWidgetOnTab(0, butGroup);
    }
    return InstrumentEditor;
}());
var instrumentEditor = new InstrumentEditor();
