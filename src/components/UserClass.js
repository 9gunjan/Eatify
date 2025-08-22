import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"Dummy",
        location:"Noida"
      }
    };
    console.log("constructor called");
  }

  async componentDidMount() {
    console.log("component did mount");

    const data = await fetch("https://api.github.com/users/9gunjan");
    const json = await data.json();
    console.log(json);
    //api calls
    //equivalent to use effet
    this.setState({
      userInfo:json,
    })
  }
  render() {
    console.log("render called");
    const { className } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h1> {name}</h1>
        <h2>Location</h2>
        <h2>Contact us</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
