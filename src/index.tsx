import React from "react";
import { createRoot, Root } from "react-dom/client";
import { BlockFactory, BlockDefinition, ExternalBlockDefinition, BaseBlock } from "@staffbase/widget-sdk";
import { OptymaPopup } from "./optyma-popup";
import { configurationSchema, uiSchema } from "./configuration-schema";
import pkg from "../package.json";

const widgetAttributes: string[] = [];
const factory: BlockFactory = (BaseBlockClass, _widgetApi) => {
  return class OptymaPopupBlock extends BaseBlockClass implements BaseBlock {
    private root: Root | null = null;
    public constructor() { super(); }
    public renderBlock(container: HTMLElement): void {
      if (!this.root) this.root = createRoot(container);
      this.root.render(<OptymaPopup />);
    }
    public static get observedAttributes(): string[] { return widgetAttributes; }
    public attributeChangedCallback(...args: [string, string | undefined, string | undefined]): void { super.attributeChangedCallback.apply(this, args); }
  };
};
const blockDefinition: BlockDefinition = { name: "optyma-popup", factory, attributes: widgetAttributes, blockLevel: "block", configurationSchema, uiSchema, label: "Optyma Launch-Popup" };
const externalBlockDefinition: ExternalBlockDefinition = { blockDefinition, author: pkg.author, version: pkg.version };
window.defineBlock(externalBlockDefinition);
