import React from "react";
import { Link } from "react-router-dom"
import "./styles.scss";


function Header(props) {
  return (
    <div className="page-body ">
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container-fluid">
            <a className="navbar-brand js-scroll-trigger" href="/">
              <img src="https://i.ibb.co/L94jBtF/chi-lanka.png" width="350px" height="100px" alt="todo" border="0" />

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <button class="btn text-light" href="#">
                    Profile <span class="sr-only">(current)</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div className="area"></div>
        <nav className="main-menu fixed-top">
          <ul>
            <hr></hr>
            <li>
              <Link to="#">
                <i className="fa fa-home fa-2x fa-cog stroke-transparent"></i>
                <span className="nav-text">Dashboard</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new1" className="collapsed">
                <a href="javascript:void(0)">  <i className="fa fa-users fa-2x fa-cog stroke-transparent"></i> <span className="nav-text">Suppliers</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
              </li>

            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new2" className="collapsed">
                <Link to="/itemsList" >  <i className="fa fa-tags fa-2x fa-cog stroke-transparent"></i> <span className="nav-text">Items</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></Link>
              </li>

              <li>
              </li>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new3" className="collapsed">
                <Link to="/prList">  <i className="fa fa-file-text-o fa-2x"></i> <span className="nav-text">Requisition</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></Link>
              </li>

              <li>
              </li>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new4" className="collapsed">
                <Link to="/pOrders">  <i className="fa fa-file-archive-o fa-2x"></i> <span className="nav-text">Purchase Orders</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></Link>
              </li>

            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new4" className="collapsed">
                <Link to="/bills">  <i className="fa fa-newspaper-o fa-2x"></i> <span className="nav-text">Bills</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></Link>
              </li>

            </li>
            <hr></hr>
            <li>
              <Link to="/">
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Log out</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <hr></hr>
          </ul>
        </nav>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        {props.children}
      </div>
    </div >
  );
}

export default Header;
