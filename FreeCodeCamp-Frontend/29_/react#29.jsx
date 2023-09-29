class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mr. Robot",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}
