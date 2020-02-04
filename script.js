function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      display: '0',
      operator: '',
      lastOperator: '' });_defineProperty(this, "clear",


    () => {
      this.setState({ display: '0', operator: '', lastOperator: '' });
    });_defineProperty(this, "addNumber",

    num => {
      let disp = this.state.display;
      let dispArr = Array.from(disp);
      let lastDisp = dispArr[dispArr.length - 1];
      let op = this.state.operator;
      if (num !== 0) {
        if (disp === '0') {
          this.setState({ display: num.toString() });
        } else if (op === '+' || op === '-' || op === '*' || op === '/' || op === '*-' || op === '/-') {
          this.setState({ display: disp + op + num.toString(), operator: '' });
        } else {
          this.setState({ display: disp + num.toString() });
        }
      } else if (num === 0) {
        if (disp === '0') {
          return;
        } else {
          this.setState({ display: disp + num.toString() });
        }
      }
    });_defineProperty(this, "addOperator",

    sign => {
      let disp = this.state.display;
      let arr = Array.from(disp);
      let op = this.state.operator;
      if (arr.indexOf('.') !== arr.length - 1 && disp !== '0') {
        if (sign === '-' && (op === '/' || op === '*')) {
          this.setState({ operator: op + sign });
        } else if (arr.indexOf('-') === arr.length - 1) {
          this.setState({ operator: '' });
        } else {
          this.setState({ operator: sign, lastOperator: sign });
        }
      }
    });_defineProperty(this, "addDecimal",

    () => {
      let disp = this.state.display;
      let arr = Array.from(disp);
      let op = this.state.lastOperator;
      if (arr.indexOf('.') !== -1) {
        if (op !== '') {
          let splitNumber = disp.split(this.state.lastOperator);
          let lastNumber = Array.from(splitNumber[splitNumber.length - 1]);
          if (lastNumber.indexOf('.') === -1) {
            this.setState({ display: disp + '.' });
          } else {return;}
        }
      } else {
        this.setState({ display: disp + '.' });
      }
    });_defineProperty(this, "calculate",

    () => {
      let disp = this.state.display;
      let dispArr = Array.from(disp);
      let lastDisp = dispArr[dispArr.length - 1];
      if (disp !== '0' && lastDisp !== '.' || lastDisp === '+' || lastDisp === '-' || lastDisp === '*' || lastDisp === '/') {
        let val = eval(disp).toString();
        this.setState({ display: val, operator: '' });
      }
    });}

  render() {
    return (
      React.createElement("div", { id: "calculator" },
      React.createElement("div", { id: "screen" },
      React.createElement("span", { id: "display" }, this.state.display + this.state.operator)),

      React.createElement("span", { onClick: this.clear, id: "clear" }, "CLEAR"),
      React.createElement("span", { onClick: () => this.addNumber(7), id: "seven" }, "7"),
      React.createElement("span", { onClick: () => this.addNumber(8), id: "eight" }, "8"),
      React.createElement("span", { onClick: () => this.addNumber(9), id: "nine" }, "9"),
      React.createElement("span", { onClick: () => this.addOperator('+'), id: "add" }, "+"),
      React.createElement("span", { onClick: () => this.addNumber(4), id: "four" }, "4"),
      React.createElement("span", { onClick: () => this.addNumber(5), id: "five" }, "5"),
      React.createElement("span", { onClick: () => this.addNumber(6), id: "six" }, "6"),
      React.createElement("span", { onClick: () => this.addOperator('-'), id: "subtract" }, "-"),
      React.createElement("span", { onClick: () => this.addNumber(1), id: "one" }, "1"),
      React.createElement("span", { onClick: () => this.addNumber(2), id: "two" }, "2"),
      React.createElement("span", { onClick: () => this.addNumber(3), id: "three" }, "3"),
      React.createElement("span", { onClick: () => this.addOperator('*'), id: "multiply" }, "*"),
      React.createElement("span", { onClick: this.calculate, id: "equals" }, "="),
      React.createElement("span", { onClick: () => this.addNumber(0), id: "zero" }, "0"),
      React.createElement("span", { onClick: this.addDecimal, id: "decimal" }, "."),
      React.createElement("span", { onClick: () => this.addOperator('/'), id: "divide" }, "/")));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));