import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import SearchBox from "../components/SearchBox";
import { signout } from "../redux/actions/userActions";
import { listProductCategories } from "../redux/actions/productActions";
import "../mainComponents/main.css";
import { BsArrowsExpand, BsArrowsCollapse } from "react-icons/bs";
function Navbar() {
  const cart = useSelector((state) => state.cart);

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [colapseNave, setColapseNave] = useState(false);

  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <nav className="nav-container">
      <div style={{ width: "100vw" }}>
        <>
          <header className="main-header">
            <div>
              <Link className="brand" to="/">
                Merbeb Solutions
              </Link>
            </div>
            <div className="main-nav-list">
              <div>
                <Route
                  render={({ history }) => (
                    <SearchBox history={history}></SearchBox>
                  )}
                ></Route>
              </div>

              <Link
                to="/cart"
                style={{
                  fontSize: "25px",
                  alignSelf: "center",
                }}
              >
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Orders</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/signin"
                  style={{ fontSize: "25px", alignSelf: "center" }}
                >
                  Login
                </Link>
              )}
              <button
                type="button"
                className="open-sidebar"
                style={{ fontSize: "25px", alignSelf: "center" }}
                onClick={() => {
                  setNavOpen(!navOpen);
                  setColapseNave(!colapseNave);
                }}
              >
                {colapseNave ? <BsArrowsCollapse /> : <BsArrowsExpand />}
              </button>
              {userInfo && userInfo.isSeller && (
                <div className="dropdown">
                  <Link to="#admin">
                    Seller <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/productlist/seller">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist/seller">Orders</Link>
                    </li>
                  </ul>
                </div>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to="#admin">
                    Admin <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Orders</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </header>
          <aside className={sidebarIsOpen ? "open" : ""}>
            <ul className="categories">
              <li>
                <strong>Product Categories</strong>
                <button
                  onClick={() => setSidebarIsOpen(false)}
                  className="close-sidebar"
                  type="button"
                >
                  <i className="fa fa-close"></i>
                </button>
              </li>
              {loadingCategories ? (
                <LoadingBox></LoadingBox>
              ) : errorCategories ? (
                <MessageBox variant="danger">{errorCategories}</MessageBox>
              ) : (
                categories.map((c) => (
                  <li key={c}>
                    <Link
                      to={`/search/category/${c}`}
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      {c}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </aside>
        </>
      </div>

      <div className={navOpen ? "nav-list" : "nav-list-close"}>
        <p>
          <button
            type="button"
            className="open-sidebar"
            onClick={() => setSidebarIsOpen(true)}
          >
            <i className="fa fa-bars"></i>
          </button>
          <Link to="/home">Digital Marketing</Link>
        </p>
        <p>
          <Link to="/chat">Social Network </Link>
        </p>
        <p>
          <Link to="/software">Software Services</Link>
        </p>
        <p>
          <Link to="/truck">Trucking solutions</Link>
        </p>
        <p>
          <Link to="/career">Career and Advertisements</Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
