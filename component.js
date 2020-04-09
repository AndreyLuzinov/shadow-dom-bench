const currentDocument = document.currentScript.ownerDocument;

class Component extends HTMLElement {
  constructor() {
    // If you define a constructor, always call super() first as it is required by the CE spec.
    super();
  }
  
  connectedCallback() {
	  const shadowRoot = this.attachShadow({mode: 'closed'});
	  const root = currentDocument.createElement("button");
	  root.innerText = "Button";
	  shadowRoot.appendChild(root);
  }
}

customElements.define('my-component', Component);