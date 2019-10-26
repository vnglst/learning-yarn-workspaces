import React from "React";
import gamma from "vnglst-gamma";
import delta from "vnglst-delta";
import demo from "vnglst-yarn-demo";
import join from "lodash/join";

function component() {
  const element = document.createElement("p");

  console.log(demo);

  element.innerHTML = join(
    ["Hello", "webpack", gamma, delta, "React", React.version, demo],
    " "
  );

  return element;
}

function button() {
  const button = document.createElement("button");

  button.innerHTML = "Load large app";

  button.onclick = () => {
    import(/* webpackChunkName: "some-app" */ "vnglst-some-app").then(
      module => {
        console.log("loaded", module.default);
      }
    );
  };

  return button;
}

document.body.appendChild(component());
document.body.appendChild(button());
