import React from 'react'
import "../../styles.scss";

function headerForReq(props) {
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
                            <a href="#">
                                <i className="fa fa-home fa-2x fa-cog stroke-transparent"></i>
                                <span className="nav-text">Dashboard</span>
                                <i className="fa fa-angle-right fa-2x"></i>
                            </a>
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
                                <a href="javascript:void(0)" >  <i className="fa fa-tags fa-2x fa-cog stroke-transparent"></i> <span className="nav-text">Items</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                            </li>

                            <li>
                            </li>
                        </li>
                        <hr></hr>
                        <li className="has-subnav">
                            <li data-toggle="collapse" data-target="#new3" className="collapsed">
                                <a href="#">  <i className="fa fa-file-text-o fa-2x"></i> <span className="nav-text">Requisition</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                            </li>

                            <li>
                            </li>
                        </li>
                        <hr></hr>
                        <li className="has-subnav">
                            <li data-toggle="collapse" data-target="#new4" className="collapsed">
                                <a href="#">  <i className="fa fa-file-archive-o fa-2x"></i> <span className="nav-text">Purchase Orders</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                            </li>

                        </li>
                        <hr></hr>
                        <li className="has-subnav">
                            <li data-toggle="collapse" data-target="#new4" className="collapsed">
                                <a href="#">  <i className="fa fa-newspaper-o fa-2x"></i> <span className="nav-text">Bills</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                            </li>

                        </li>
                        <hr></hr>

                        <li className="has-subnav">
                            <li data-toggle="collapse" data-target="#new" className="collapsed">
                                <a href="javascript:void(0)">  <i className="fa fa-file-pdf-o fa-2x"></i> <span className="nav-text">Reports</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                            </li>
                            <ul className="sub-menu collapse" id="new">
                                <li className="has-subnav ">
                                    <a href="#">
                                        <i className="fa"></i>
                                        <span className="nav-text">Employees</span>
                                        <i className="fa fa-angle-right fa-3x"></i>
                                    </a>
                                </li>
                                <li className="has-subnav">
                                    <a href="#">
                                        <i className="fa  fa-2x"></i>
                                        <span className="nav-text">Rentals</span>
                                        <i className="fa fa-angle-right fa-2x"></i>
                                    </a>
                                </li>
                                <li className="has-subnav">
                                    <a href="#">
                                        <i className="fa fa-2x"></i>
                                        <span className="nav-text">Reservations</span>
                                        <i className="fa fa-angle-right fa-2x"></i>
                                    </a>
                                </li>
                                <li className="has-subnav">
                                    <a href="#">
                                        <i className="fa fa-2x"></i>
                                        <span className="nav-text">Vehicle Inventory</span>
                                        <i className="fa fa-angle-right fa-2x"></i>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <hr></hr>
                        <li>
                            <a href="/">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">Log out</span>
                                <i className="fa fa-angle-right fa-2x"></i>
                            </a>
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
    )
}

export default headerForReq
