import React, { useState, useEffect } from "react";
import logo1 from "../logo1.png";
import { Link } from "react-router-dom";

const Login = () => {
  //TODO: STATES
  const [values, setValues] = useState({
    email: "",
    password: "",
    remeberMe: false,
  });

  const { email, password } = values;

  const [theme, setTheme] = useState("Light");
  const [colors, setColors] = useState({
    HeadingColor: "#000",
    backgroundColor: "white",
    textColor: "#000",
    button: "black",
    buttonTextColor: "white",
  });

  // TODO: FUNCTIONS:
  const ChangeColor = () => {
    if (theme === "Light") {
      setColors({
        HeadingColor: light.HeadingColor,
        backgroundColor: light.backgroundColor,
        textColor: light.textColor,
        button: light.button,
        buttonTextColor: light.buttonTextColor,
      });
    } else if (theme === "Dark") {
      setColors({
        HeadingColor: Dark.HeadingColor,
        backgroundColor: Dark.backgroundColor,
        textColor: Dark.textColor,
        button: Dark.button,
        buttonTextColor: Dark.buttonTextColor,
      });
    } else if (theme === "cosmic") {
      setColors({
        HeadingColor: cosmic.HeadingColor,
        backgroundColor: cosmic.backgroundColor,
        textColor: cosmic.textColor,
        button: cosmic.button,
        buttonTextColor: cosmic.buttonTextColor,
      });
    } else if (theme === "corporate") {
      setColors({
        HeadingColor: corporate.HeadingColor,
        backgroundColor: corporate.backgroundColor,
        textColor: corporate.textColor,
        button: corporate.button,
        buttonTextColor: corporate.buttonTextColor,
      });
    }
  };

  const handleChange = (email) => (event) => {
    setValues({ ...values, [email]: event.target.value });
  };

  const HandleClick = (e) => {
    setTheme(e.target.innerHTML);
  };

  const light = {
    HeadingColor: "#000",
    backgroundColor: "white",
    textColor: "#959595",
    button: "black",
    buttonTextColor: "white",
  };
  const Dark = {
    HeadingColor: "white",
    backgroundColor: "#222B45",
    textColor: "#8F99B0",
    button: "#3366FF",
    buttonTextColor: "white",
  };
  const cosmic = {
    HeadingColor: "white",
    backgroundColor: "#323259",
    textColor: "#959595",
    button: "#A16EFF",
    buttonTextColor: "white",
  };
  const corporate = {
    HeadingColor: "#000",
    backgroundColor: "white",
    textColor: "#959595",
    button: "black",
    buttonTextColor: "white",
  };

  const Styles = {
    HeadingColor: colors.HeadingColor,
    backgroundColor: colors.backgroundColor,
    textColor: colors.textColor,
    button: colors.button,
    buttonTextColor: colors.buttonTextColor,
  };

  useEffect(() => {
    ChangeColor();
    // eslint-disable-next-line
  }, [theme]);
  console.log(theme);

  return (
    <div
      className="container-fluid body"
      style={{
        backgroundColor: Styles.backgroundColor,
        body: Styles.backgroundColor,
      }}
    >
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left my-5">
          <img className="w-25 mx-auto d-block pt-5" src={logo1} alt="" />
          <p className="text-center" style={{ color: Styles.HeadingColor }}>
            We love creative Business Ideas
          </p>
          <form>
            <div className="form-group pt-4">
              <label className="textLeft" style={{ color: Styles.textColor }}>
                Email
              </label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group py-1">
              <label style={{ color: Styles.textColor }}>Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
                placeholder="Enter password"
                required
              />
            </div>

            <div class="d-flex justify-content-between">
              <p>
                <input className="checkbox mx-1" type="checkbox" />
                <span style={{ color: Styles.textColor }}>Remeber Me </span>
              </p>

              <nav>
                <Link
                  to="/forget"
                  style={{ color: Styles.HeadingColor, cursor: "pointer" }}
                  className="link"
                >
                  Forget Password?
                </Link>
              </nav>
            </div>

            <div className="d-grid">
              <button
                className="btn btn-lg "
                type="button"
                style={{
                  backgroundColor: Styles.button,
                  color: Styles.buttonTextColor,
                }}
              >
                Log In
              </button>
            </div>

            <div class="dropdown py-3">
              <div style={{ color: Styles.textColor }}>Select Theme</div>
              <button
                class="btn dropdown-toggle dropDown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {theme}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a
                    class="dropdown-item"
                    href="#/"
                    onClick={HandleClick}
                    style={{ color: Styles.textColor }}
                  >
                    Light
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#/"
                    onClick={HandleClick}
                    style={{ color: Styles.textColor }}
                  >
                    Dark
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#/"
                    onClick={HandleClick}
                    style={{ color: Styles.textColor }}
                  >
                    cosmic
                  </a>
                </li>

                <li>
                  <a
                    class="dropdown-item"
                    href="#/"
                    onClick={HandleClick}
                    style={{ color: Styles.textColor }}
                  >
                    corporate
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="form-group py-4 d-grid">
            <div>Select Theme</div>
            <select>
              <option value="light">Light</option>

              <option value="Dark">Dark</option>

              <option value="Cosmic">Cosmic</option>

              <option value="corporate">corporate</option>
            </select>
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
