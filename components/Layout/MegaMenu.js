import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Cart from "../Modal/Cart";
import { decryptData } from "../../store/actions/cartActions";
import axios from "axios";

let host = process.env.API_URL;

function MegaMenu(props) {
  const [cartLength, setcartLength] = useState(0);

  const [state, setstate] = useState({
    display: false,
    searchForm: false,
    collapsed: true,
    checkCart: false,
  });

  const [categories, setcategories] = useState([]);

  const handleCart = () => {
    setstate((prevState) => {
      return {
        display: !prevState.display,
        collapsed: true,
      };
    });
  };

  const handleSearchForm = () => {
    setstate((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  const toggleNavbar = () => {
    setstate({
      collapsed: !state.collapsed,
    });
  };
  console.log(state);
  const fetchCategories = async () => {
    try {
      let res = await axios.get(`${host}/api/user/category/`);
      if (res) {
        setcategories(res.data.categories);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    let myProd = localStorage.getItem(process.env.CART_COOKIE)
      ? localStorage.getItem(process.env.CART_COOKIE)
      : [];
    let decryptedData = decryptData(myProd);
    setcartLength(decryptedData.length);
  }, [props.products]);

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const { collapsed } = state;
  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div className="navbar-area">
        <div id="navbar" className="comero-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <Link href="/">
                <img
                  src={require("../../images/logos/logo.png")}
                  alt=""
                  style={{ width: "10rem" }}
                  className="navbar_logo"
                />
              </Link>

              <div className="view_cart">
                <div className="notification">
                  <i
                    className="fas fa-shopping-bag"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCart();
                    }}
                  ></i>
                  <span
                    className="badge"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCart();
                    }}
                  >
                    {cartLength}
                  </span>
                </div>
              </div>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {/*{categories.length ? (
                    <>
                      {categories.map((category, i) => {
                        if (category.status) {
                          if (category.sub_categories.length) {
                            return (
                              <li key={i} className="nav-item p-relative">
                                <Link key={i} href="#">
                                  <a className="nav-link">
                                    {category.name}{" "}
                                    <i className="fas fa-chevron-down"></i>
                                  </a>
                                </Link>

                                <ul className="dropdown-menu">
                                  {category.sub_categories.map((subCat, i) => {
                                    return (
                                      <li key={i} className="nav-item">
                                        <Link
                                          href={`/subcategory/${subCat.slug}`}
                                        >
                                          <a className="nav-link">
                                            {subCat.name}
                                          </a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          } else {
                            return (
                              <li key={i} className="nav-item megamenu">
                                <Link href={`/category/${category.slug}`}>
                                  <a className="nav-link">{category.name}</a>
                                </Link>
                              </li>
                            );
                          }
                        }
                      })}
                    </>
                  ) : null} */}

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a className="nav-link">Road bike</a>
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a className="nav-link">Mountain bike</a>
                    </Link>
                  </li>
                  
                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a className="nav-link">Fixie bike</a>
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a className="nav-link">E-bike</a>
                    </Link>
                  </li>

                  <li className="nav-item p-relative">
                    <Link href="#">
                      <a className="nav-link">
                        Budget <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/budget?f=0&t=1500">
                          <a className="nav-link">BELOW ₱1,500</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/budget?f=1500&t=3000">
                          <a className="nav-link">₱1,500 - ₱3,000</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/budget?f=3000&t=4500">
                          <a className="nav-link">₱3,000 - ₱4,500</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/budget?f=4500&t=1000000">
                          <a className="nav-link">₱4,500 AND ABOVE</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="others-option">
                  <div className="option-item">
                    <i
                      onClick={handleSearchForm}
                      className="search-btn fas fa-search"
                      style={{
                        display: state.searchForm ? "none" : "block",
                      }}
                    ></i>

                    <i
                      onClick={handleSearchForm}
                      className={`close-btn fas fa-times ${
                        state.searchForm ? "active" : ""
                      }`}
                    ></i>

                    <div
                      className="search-overlay search-popup"
                      style={{
                        display: state.searchForm ? "block" : "none",
                      }}
                    >
                      <div className="search-box">
                        <form action="/search" className="search-form">
                          <input
                            className="search-input"
                            name="search"
                            placeholder="Search"
                            type="text"
                          />
                          <button className="search-button" type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="option-item">
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleCart();
                        }}
                      >
                        Cart({cartLength}){" "}
                        <i className="fas fa-shopping-bag"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {state.display ? <Cart onClick={handleCart} /> : ""}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default connect(mapStateToProps)(MegaMenu);
