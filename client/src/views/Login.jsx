import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signin } from "../redux/actions/authActions";

const Login = () => {
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const isAuth=localStorage.getItem("isAuth")
  const [user, setUser] = useState({email:"" , password:""})
 
  
  
  return (
    <div
      className="app-container app-theme-white body-tabs-shadow"
      style={{ height: "100%" , width:"100%"}}
    >
      <div className="app-container" >
        <div className="h-100">
          <div className="h-100 no-gutters row">
            <div className="d-none d-lg-block col-lg-4">
              <div className="slider-light">
                <div className="slick-slider">
                  <div>
                    <div
                      className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate"
                      tabIndex={-1}
                      
                    >
                      <div
                        className="slide-img-bg"
                        style={{
                          backgroundImage:
                            'url("assets/images/originals/city.jpg")',
                        }}
                      />
                      <div className="slider-content">
                        <h3>Perfect Balance</h3>
                        <p>
                          ArchitectUI is like a dream. Some think it's too good
                          to be true! Extensive collection of unified React
                          Boostrap Components and Elements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                      tabIndex={-1}
                    >
                      <div
                        className="slide-img-bg"
                        style={{
                          backgroundImage:
                            'url("assets/images/originals/citynights.jpg")',
                        }}
                      />
                      <div className="slider-content">
                        <h3>Scalable, Modular, Consistent</h3>
                        <p>
                          Easily exclude the components you don't require.
                          Lightweight, consistent Bootstrap based styles across
                          all elements and components
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning"
                      tabIndex={-1}
                    >
                      <div
                        className="slide-img-bg"
                        style={{
                          backgroundImage:
                            'url("assets/images/originals/citydark.jpg")',
                        }}
                      />
                      <div className="slider-content">
                        <h3>Complex, but lightweight</h3>
                        <p>
                          We've included a lot of components that cover almost
                          all use cases for any type of application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
              <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                <div className="app-logo" />
                <h4 className="mb-0">
                  <span className="d-block">Welcome back,</span>
                  <span>Please sign in to your account.</span>
                </h4>

                <div className="divider row" />
                <div>
                  <form className>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label htmlFor="exampleEmail" className>
                            Email
                          </label>
                          <input
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            name="email"
                            id="exampleEmail"
                            placeholder="Email here..."
                            type="email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label htmlFor="examplePassword" className>
                            Password
                          </label>
                          <input
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            name="password"
                            id="examplePassword"
                            placeholder="Password here..."
                            type="password"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="position-relative form-check">
                      <input
                        name="check"
                        id="exampleCheck"
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="exampleCheck"
                        className="form-check-label"
                      >
                        Keep me logged in
                      </label>
                    </div>
                    <div className="divider row" />
                    <div className="d-flex align-items-center">
                      <div className="ml-auto">
                        <button
                          className="btn btn-primary btn-lg"
                          onClick={() => dispatch(signin(user)) && (isAuth?navigate("/home"):navigate("/"))}
                        >
                          Login to App
                          
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
