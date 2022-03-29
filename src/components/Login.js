import React, {useState} from "react";

const Login = () => {
  const [state, setState] = useState({
    email : "",
    password: ""
  })
  const handleChange = (e) =>{
    const {id, value} = e.target
    setState(prevState => ({
      ...prevState,
      [id] : value
    })
    )
  }
  return(
    <div
      className="container has-text-centered box form-style">
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">

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

  )
}

export default Login;
