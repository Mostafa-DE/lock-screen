const root = document.querySelector(".main");
const childAttribute = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const hoveredNode = [];
const matchArray = [];

let isPatternDrawn = false;

const bootstrap = () => {
  for (let i = 0; i < 9; i++) {
    const child = document.createElement("div");
    root.appendChild(child);
    child.classList.add("child");
    child.setAttribute("node-id", childAttribute[i]);
  }
};

const reset = () => {
  hoveredNode.length = 0;
  childNodes.forEach((node) => {
    node.classList.remove("hovered");
  });
};

const createPattern = (currentNode) => {
  matchArray.push(currentNode);
  if (matchArray.length === 9) {
    isPatternDrawn = true;
    reset();
  }
};

const validatePattern = () => {
  if (hoveredNode.length === 9) {
    const isMatched = matchArray.toString() === hoveredNode.toString();
    if (isMatched) {
      alert("Congratulations! You have drawn the pattern correctly");
      reset();
    } else {
      alert("Sorry! You have drawn the pattern incorrectly, please try again");
      reset();
    }
  }
};

const onHover = (e) => {
  const { target } = e;
  const { classList } = target;
  const isNodeHovered = classList.contains("hovered");
  const isNodeChild = classList.contains("child");
  classList.add("hovered");
  const currentNode = target.getAttribute("node-id");

  if (!isNodeHovered && isNodeChild) {
    if (!isPatternDrawn) createPattern(currentNode);
    else {
      hoveredNode.push(currentNode);
      validatePattern();
    }
  }
};

bootstrap();

const childNodes = document.querySelectorAll(".child");
childNodes.forEach((node) => {
  node.addEventListener("mouseover", onHover);
});

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("clicked");
  matchArray.length = 0;
  isPatternDrawn = false;
  reset();
});
