class ButtonWidget extends Widget
{
    Draw(parent?: HTMLElement): HTMLElement
	 {
		  let buttonWidget = document.createElement("button");

		  buttonWidget.classList.add("btn");
		  buttonWidget.classList.add("btn-default");

        if (parent)
				parent.appendChild(buttonWidget);
		  else
				document.body.appendChild(buttonWidget);

		  return buttonWidget;
    }
};