import React from 'react';
import('../../main/css/style.css');
import('../../main/css/skin_color.css');

function ZonesPage() {
  return (
    <div className="hold-transition light-skin sidebar-mini theme-primary">
      <div className="wrapper">
        <div id="loader"></div>
        <header className="main-header">
          <div className="d-flex align-items-center logo-box justify-content-start">
            <a
              href="#"
              className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent"
              className="push-menu"
              role="button"
            >
              <span className="icon-Align-left">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </span>
            </a>
            <a href="/zones" className="logo">
              <div className="logo-lg">
                <span className="light-logo">
                  <img src="../../images/logo-dark-text.png" alt="logo" />
                </span>
                <span className="dark-logo">
                  <img src="../images/logo-light-text.png" alt="logo" />
                </span>
              </div>
            </a>
          </div>
          <nav className="navbar navbar-static-top">
            <div className="app-menu"></div>
            <div className="navbar-custom-menu r-side">
              <ul className="nav navbar-nav">
                <li className="btn-group d-lg-inline-flex d-none">
                  <div className="app-menu">
                    <div className="search-bx mx-5">
                      <form>
                        <div className="input-group">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn" type="submit" id="button-addon3">
                              <i className="ti-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </li>
                <li className="dropdown user user-menu">
                  <a
                    href="#"
                    className="waves-effect waves-light dropdown-toggle"
                    data-toggle="dropdown"
                    title="User"
                  >
                    <i className="icon-User">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </a>
                  <ul className="dropdown-menu animated flipInX">
                    <li className="user-body">
                      <a className="dropdown-item" href="#">
                        <i className="ti-user text-muted mr-2"></i> Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ti-wallet text-muted mr-2"></i> My Wallet
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ti-settings text-muted mr-2"></i> Settings
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="ti-lock text-muted mr-2"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className="main-sidebar">
          <section className="sidebar">
            <ul className="sidebar-menu" data-widget="tree">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-Incoming-mail">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <span>Zones</span>
                </a>
              </li>
            </ul>
          </section>
          <div className="sidebar-footer">
            <a
              href="#"
              className="link"
              data-toggle="tooltip"
              title=""
              data-original-title="Settings"
              aria-describedby="tooltip92529"
            >
              <span className="icon-Settings-2"></span>
            </a>

            <a href="#" className="link" data-toggle="tooltip" title="" data-original-title="Email">
              <span className="icon-Mail"></span>
            </a>

            <a
              href="#"
              className="link"
              data-toggle="tooltip"
              title=""
              data-original-title="Logout"
            >
              <span className="icon-Lock-overturning">
                <span className="path1"></span>
                <span className="path2"></span>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ZonesPage;
