import { TrafficLight } from "./TrafficLight.js";
import { Button } from "./Button.js";

const trafficLightMain = new TrafficLight(".trafficLightMain ol");
const trafficLightPas = new TrafficLight(".trafficLightPas ol");
trafficLightPas.COLLORS = ["SpringGreen", "red"];

const button = new Button(
  ".container button",
  trafficLightMain,
  trafficLightPas,
  {
    startTimeout: 3000,
    warningTimeout: 2000,
    stopMain: 15000,
    minTimeStart: 60000,
  }
);

button.obj.addEventListener("click", () => {
  button.start();
});
