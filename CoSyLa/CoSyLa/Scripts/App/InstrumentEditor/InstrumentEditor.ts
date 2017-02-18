class InstrumentEditor
{
	 w: Widget;
    constructor() {
        this.w = new Widget(document.getElementById("mainWindow"));
    }
}

let instrumentEditor: InstrumentEditor = new InstrumentEditor();