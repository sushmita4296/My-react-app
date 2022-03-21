import React from "react";

class Login extends React.Component {
  render(){
    return (
      <div
        className="container has-text-centered box"
        style={{ maxWidth: "300px", marginTop: "70px" }}
      >
        <form>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <div className="control">
              <input
                className="input"
                name="email"
                type="email"
                placeholder="email"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
  
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <div className="control">
              <input
                className="input"
                name="password"
                type="password"
                placeholder="password"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
  
          <div className="field">
            <div className="control buttons is-centered">
              <input
                className="button is-medium is-danger is-fullwidth"
                type="submit"
                value="Sign In"
              />
            </div>
          </div>
        </form>
      </div>
    );

  }
}
export default Login;
