const preview = document.querySelector("#preview");
const previewScale = document.querySelector("#preview-scale");
const previewFlip = document.querySelector("#preview-flip");
const brightnessSlider = document.querySelector("#brightness");
const brightnessSliderValue = document.querySelector("#brightness-value");
const rotateSlider = document.querySelector("#rotate");
const rotateSliderValue = document.querySelector("#rotate-value");

let global = {
  rotate: 0,
  scale: 0,
  brightness: "brightness(100%)",
  filter: "",
};
const updatePreview = () => {
  preview.style.filter = `${global.filter} ${global.brightness}`;
  preview.style.transform = `${global.rotate} ${global.scale}`;
};

const DegToRad = (num) => {
  return (num * Math.PI) / 180;
};
const handleRotate = () => {
  const rotate = rotateSlider.value;
  rotateSliderValue.innerText = rotate;
  global.rotate = `rotate(${rotate}deg)`;
  global.scale = `scale(${
    Math.abs(Math.sin(DegToRad(rotate)).toFixed(5)) +
    Math.abs(Math.cos(DegToRad(rotate)).toFixed(5))
  })`;
  updatePreview();
};

const handleBrightness = () => {
  const brightness = brightnessSlider.value;
  brightnessSliderValue.innerText = brightness;
  global.brightness = `brightness(${Math.round(brightness * 100)}%)`;
  updatePreview();
};

const handleFilter = (e) => {
  const { target } = e;
  const { id: filter } = target;
  switch (filter) {
    case "grayscale":
      global.filter = "grayscale(1)";
      break;
    case "sepia":
      global.filter = "sepia(1)";
      break;
    case "invert":
      global.filter = "invert(1)";
      break;
    case "blur":
      global.filter = "blur(2px)";
      break;
    case "saturate":
      global.filter = "saturate(2)";
      break;
    case "contrast":
      global.filter = "contrast(2)";
      break;
    case "hue-rotate":
      global.filter = "hue-rotate(90deg)";
      break;
    default:
      global.filter = "";
      break;
  }
  updatePreview();
};

let h = 1,
  v = 1;
const handleFlip = (flip) => {
  if (flip === "horizontal") {
    h = h === 1 ? -1 : 1;
  }
  if (flip === "vertical") {
    v = v === 1 ? -1 : 1;
  }
  previewFlip.style.transform = `scale(${h}, ${v})`;
};

const handleMouseEnter = () => {
  console.log("enter");
  previewScale.style.transform = "scale(2)";
};

const handleMouseLeave = () => {
  previewScale.style.transform = "scale(1)";
};

const handleMouseMove = (e) => {
  const imageWidth = previewScale.offsetWidth;
  const imageHeight = previewScale.offsetHeight;
  const imageOffsetTop = previewScale.offsetTop;
  const imageOffsetLeft = previewScale.offsetLeft;
  const pageX = e.pageX;
  const pageY = e.pageY;
  previewScale.style.transformOrigin = `${pageX - imageOffsetLeft}px ${
    pageY - imageOffsetTop
  }px`;
};
