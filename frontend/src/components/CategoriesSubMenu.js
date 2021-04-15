import React, { Component } from "react";
import "../assets/css/MegaMenu.css";
import $ from "jquery";
import { Link } from "react-router-dom";
window.jQuery = $;
export default class CategoriesSubMenu extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $(document).on("click", ".dropdown-menu", function (e) {
        e.stopPropagation();
      });

      if ($(window).width() < 992) {
        $(".has-submenu a").click(function (e) {
          e.preventDefault();
          $(this).next(".megasubmenu").toggle();

          $(".dropdown").on("hide.bs.dropdown", function () {
            $(this).find(".megasubmenu").hide();
          });
        });
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                {" "}
                Staples{" "}
              </Link>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <Link
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={() => console.log("Clicked Link Dropdown 3")}
                  >
                    {" "}
                    Dals
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Gheel & Oils
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Atta & Flours
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Masala & Spices
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12">
                        {/* <h6 className="title">Title Menu One</h6> */}
                        <ul className="list-unstyled">
                          <li>
                            <Link href="#">Custom Menu 4 - 1</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Rice & Rice Products
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12">
                        <ul className="list-unstyled">
                          <li>
                            <Link href="#">Custom Menu 4 - 1</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Dry Fruits Nuts & Seeds
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12">
                        <h6 className="title">Title Menu One</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="#">Custom Menu 4 - 1</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                {" "}
                Mega submenu{" "}
              </Link>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <Link
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={() => console.log("Clicked Link Dropdown 3")}
                  >
                    {" "}
                    Dropdown item 3{" "}
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Dropdown item 3{" "}
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Dropdown item 3{" "}
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Dropdown item 4{" "}
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12">
                        <h6 className="title">Title Menu One</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="#">Custom Menu 4 - 1</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="#">
                    {" "}
                    Dropdown item 4{" "}
                  </Link>
                  <div className="megasubmenu dropdown-menu">
                    <div className="row">
                      <div className="col-12">
                        <h6 className="title">Title Menu One</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="#">Custom Menu 4 - 1</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Menu 4 - 2</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
