export interface CustomElementAdopted {
  /**
   * Invoked each time the custom element is moved to a new document.
   */
  adoptedCallback(): void;
}

export interface CustomElementAttributeChanged {
  /**
   * Invoked each time one of the custom element's attributes is added, removed, or changed.
   * Which attributes to notice change for is specified in a static get `observedAttributes` method.
   */
  attributeChangedCallback<T1, T2>(name: string, oldValue: T1, newValue: T2): void;
}

export interface CustomElementConnected {
  /**
   * Invoked each time the custom element is appended into a document-connected element.
   * This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.
   */
  connectedCallback(): void;
}

export interface CustomElementDisconnected {
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  disconnectedCallback(): void;
}

interface CustomElementStatic {
  readonly observedAttributes: string[];
}

/**
 * Implement this interface to define all lifecycle hooks for custom `HTMLElement`
 */
export interface CustomElement extends 
    HTMLElement,
    CustomElementAdopted,
    CustomElementAttributeChanged,
    CustomElementConnected,
    CustomElementDisconnected {}

export declare const CustomElement: CustomElementStatic;
