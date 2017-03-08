// MainWidget is a form stretched on all size of client area
// MainWidget must have only one copy on page

class MainWidget extends Widget
{
	 constructor(parent?: Widget)
	 {
		  super();

		  this.DomElement.id = "MainWidget";
		  document.body.appendChild(this.DomElement);
	 }
}