// times: объект, описывающий тайминги {
//     startTimeout: Number(),
//     warningTimeout: Number(),
//     stopMain: Number(),
//     minTimeStart: Number()
// }

export class Button {
  constructor(select, mainTr, pasTr, times) {
    this.times = times;
    this.obj = document.querySelector(select);
    this.state = 0; // seconds
    this.mainTr = mainTr;
    this.mainTr.setState(0);
    this.pasTr = pasTr;
    this.pasTr.setState(1);
  }

  setState(state) {
    this.state = state;
  }

  async start() {
    const {
      startTimeout = 0,
      warningTimeout = 0,
      stopMain = 0,
      minTimeStart = 0,
    } = this.times;
    if (this.state == 0) {
      this.setState(1);
      return this.run(startTimeout)
        .then(() => this.run(warningTimeout, [1]))
        .then(() => this.run(stopMain-warningTimeout, [2, 0]))
        .then(() => this.run(warningTimeout, [1]))
        .then(() => this.run(0,[0, 1]))
        .then(() => this.run(minTimeStart))
        .then(() => {this.setState(0)});
    }
  }

  // 0 -mainTr
  // 1 -pasTr
  run(ms, states = []) {
    states[0] >= 0 && this.mainTr.setState(states[0]);
    states[1] >= 0 && this.pasTr.setState(states[1]);

    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}