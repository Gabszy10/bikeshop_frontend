import React, { useState, useEffect } from "react";
import Link from "next/link";
import Wishlist from "../Modal/Wishlist";
import cookie from "js-cookie";
import { logout } from "../../store/actions/userActions";

function TopHeader(props) {
  const [state, setstate] = useState({
    display: false,
  });

  const [user, setuser] = useState(null);

  useEffect(() => {
    // let encryptedData = localStorage.getItem(process.env.USER_COOKIE)
    //   ? localStorage.getItem(process.env.USER_COOKIE)
    //   : [];

    // let user = decryptUserData(encryptedData);
    let token = cookie.get("_wus_BJK");
    console.log(token);
    if (token) {
      setuser(token);
    }
  }, []);

  const handleWishlist = () => {
    setstate((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  return (
    <React.Fragment>
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <ul className="top-header-nav">
                {!user ? (
                  <li>
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </li>
                ) : null}
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Our Stores</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>FAQ's</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6">
              <ul className="top-header-right-nav">
                {/* <li>
                                        <Link href="#">
                                            <a 
                                                data-toggle="modal" 
                                                data-target="#shoppingWishlistModal"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    handleWishlist()
                                                }}
                                            >
                                                Wishlist <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li> */}
                {/* <li>
                    <Link href="/compare">
                      <a>
                        Compare <i className="fas fa-balance-scale"></i>
                      </a>
                    </Link>
                  </li> */}
                {/* <li>
                                        <div className="languages-list">
                                            <select>
                                                <option value="1">Eng</option>
                                                <option value="2">Ger</option>
                                                <option value="3">Span</option>
                                            </select>
                                        </div>
                                    </li> */}
                {user ? (
                  <>
                    <li>
                      <Link href="/profile">
                        <a>
                          Profile <i className="fas fa-user"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a onClick={() => logout()}>
                        Logout <i className="fas fa-sign-out-alt"></i>
                      </a>
                    </li>
                  </>
                ) : (
                  <li>
                    {/* <Link href="/login">
                      <a>
                        Login <i className="fas fa-sign-in-alt"></i>
                      </a>
                    </Link> */}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {state.display ? <Wishlist onClick={handleWishlist} /> : ""}
    </React.Fragment>
  );
}

export default TopHeader;
