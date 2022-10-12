import React from "react";
import { render } from "react-dom";
import { PickerOptions } from "@ionic/core";

const MockIonPicker: React.FC<PickerOptions> = (opts) => {
  const buttonClass = (cssClass?: string | string[]) => {
    if (cssClass) {
      if (typeof cssClass === "string") {
        return cssClass;
      }
      return cssClass.join(" ");
    }
    return "";
  };

  return (
    <div>
      <div className="picker-toolbar">
        {opts.buttons?.map((button, i) => (
          <button
            key={`button-${i}`}
            className={buttonClass(button.cssClass)}
            onClick={button.handler}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div className="picker-columns">
        {opts.columns?.map((column, i) => (
          <div className="picker-column" key={`column-${i}`}>
            {column.options.map((option, i) => (
              <button
                key={`option-${i}`}
                disabled={option.disabled}
                value={option.value}
              >
                {option.text}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const mockUseIonPicker = () => {
  let root: HTMLElement;

  const present = (props: PickerOptions) => {
    root = document.createElement("div");
    root.className = "mock-ion-picker";

    render(<MockIonPicker {...props} />, root);

    document.body.appendChild(root);
  };

  const dismiss = async () => {
    if (root) {
      root.remove();
    }
  };

  return [present, dismiss];
};
