import React, { Component } from "react";
import "../assets/css/MegaMenu.css";
import $ from "jquery";
import categoriesMenuData from "./categoriesMenuData";
import edibleOilsImagePath from "../assets/images/products/edible-oils/Edible-Oils-2.jpg";
import { withRouter } from "react-router-dom";
window.jQuery = $;
class CategoriesSubMenuVer2 extends Component {
  redirectToProductDetails = () => {
    const { history } = this.props;
    console.log("Redirecting to Cart Screen...");
    if (history) {
      history.push("/cart/");
    } else {
      console.log("History is NULL");
    }
  };
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
    const { history } = this.props;
    const addToCartHandler = () => {
      console.log("Exec addto Cart Handler");
      history.push("/home");
    };
    return (
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          {categoriesMenuData.map((rootCategoryItem) => {
            return (
              <li className="nav-item dropdown">
                <div>
                  <img
                    className="img-thumbnail"
                    alt="Edible Oils"
                    src={edibleOilsImagePath}
                    style={{
                      height: "3.5rem",
                      width: "3.5rem",
                      marginRight: "5em",
                    }}
                  />
                </div>
                <div
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-toggle="dropdown"
                >
                  {rootCategoryItem.name}
                  <ul className="dropdown-menu">
                    {rootCategoryItem.categories.map((categoryItem) => (
                      <li
                        className="has-submenu"
                        onClick={() => console.log("Clicked Link Dropdown 3")}
                      >
                        <div
                          className="dropdown-item dropdown-toggle"
                          to="#"
                          onClick={() => console.log("Clicked Link Dropdown 3")}
                        >
                          {categoryItem.name}
                        </div>
                        <div className="megasubmenu dropdown-menu">
                          <div className="row">
                            <div className="col-12">
                              <ul className="list-unstyled">
                                {categoryItem.products.map((eachProduct) => (
                                  <li
                                    key={eachProduct.id}
                                    className="nav-item"
                                    onClick={addToCartHandler}
                                  >
                                    <div onClick={addToCartHandler}>
                                      {eachProduct.name}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default withRouter(CategoriesSubMenuVer2);
