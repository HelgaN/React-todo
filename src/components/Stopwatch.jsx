import React from "react";
import Button from "./Button";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false,
      elapsed: 0,
      lastTick: 0
    }

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);    // предотвращение утечки памяти
  }

  tick() {
    if(this.state.run) {
      let now = Date.now();
      let diff = now - this.state.lastTick;

      this.setState({
        elapsed: this.state.elapsed + diff,
        lastTick: now
      });
    }
  }

  handleStart() {
    this.setState({
      run: true,
      lastTick: Date.now()
    })
  }

  handlePause() {
    this.setState({run: false});
  }

  handleStop() {
    this.setState({
      run: false,
      elapsed: 0,
      lastTick: 0
    });
  }

  format(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `${minutes > 9 ? minutes : "0" + minutes} : ${seconds > 9 ? seconds : "0" + seconds }`;
  }

  render() {
    let time = this.format(this.state.elapsed);

    return (
      <section className="stopwatch">
        <div className="stopwatch-time">{time}</div>
        <div className="stopwatch-controls">
          {this.state.run ?
          <Button className="icon" icon="pause" onClick={this.handlePause} /> :
          <Button className="icon" icon="play_arrow" onClick={this.handleStart} />
          }
          <Button className="icon" icon="stop" onClick={this.handleStop} />
        </div>
      </section>
    );
  }

}

export default Stopwatch;
