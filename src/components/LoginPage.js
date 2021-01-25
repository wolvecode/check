import React, { useState } from 'react';
import axios from 'axios';

import('../index.css');
import('../../main/css/skin_color.css');
import('../../main/css/style.css');

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const sign = {
      email: email,
      password: password,
    };

    axios
      .post(process.env.baseUrl + '/admin/login?api_token=' + process.env.api_token, sign)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log(res.data);
      });
  }

  return (
    <div
      style={{
        backgroundImage: 'url(../images/index-bg/background.jpg)',
      }}
      className="hold-transition theme-primary bg-img"
    >
      <div className="container h-p100">
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="bg-white rounded10 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary" style={{ color: '#7f0000' }}>
                      Welcome to FIMITI
                    </h2>
                    <p className="mb-0">Sign in to continue to Fimiti</p>
                  </div>
                  <div className="p-40">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                              <i className="ti-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Username"
                            onChange={handleEmail}
                            value={email}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                              <i className="ti-lock"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Password"
                            onChange={handlePassword}
                            value={password}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="checkbox">
                            <input type="checkbox" id="basic_checkbox_1" />
                            <label htmlFor="basic_checkbox_1">Remember Me</label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="fog-pwd text-right">
                            <a href="/zones" className="hover-warning">
                              <i className="ion ion-locked"></i> Forgot password?
                            </a>
                            <br />
                          </div>
                        </div>

                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-danger mt-10">
                            SIGN IN
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Don't have an account?
                        <a href="auth_register.html" className="text-warning ml-5">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
