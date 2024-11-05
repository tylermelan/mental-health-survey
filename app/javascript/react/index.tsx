import { createRoot } from "react-dom/client";
import { Survey } from "./pages/Survey/Survey";

function getRegisteredComponent(componentName: string) {
  const registeredComponents = new Map([[Survey.name, Survey]]);

  return registeredComponents.get(componentName);
}

function setupReact() {
  const reactContainer = document.getElementById("react-container");

  if (!reactContainer) return;

  const componentName = reactContainer.dataset.component;

  if (!componentName) {
    console.error(
      'No component set on react container. Usage: <div id="react-container" component="Component"></div>'
    );
    return;
  }

  const Component = getRegisteredComponent(componentName);

  if (!Component) {
    console.error(
      `${componentName} not found. Make sure ${componentName} is defined and registered`
    );
    return;
  }

  const root = createRoot(reactContainer);
  root.render(<Component />);
}

setupReact();
