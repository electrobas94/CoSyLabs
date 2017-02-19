var InstrumentEditor = (function () {
    function InstrumentEditor() {
        this.w = new TabWidget(document.getElementById("mainWindow"));
        this.w.AddTab("bla bla");
        this.w.AddTab("bla bla");
        this.w.AddTab("bla bla");
        this.w.AddTab("bla bla");
        this.w.AddTab("bla bla");
        this.w.SelectTab(2);
    }
    return InstrumentEditor;
}());
var instrumentEditor = new InstrumentEditor();
