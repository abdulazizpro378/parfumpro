"use client";
import { NavLink } from "react-bootstrap";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footers">
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 title">
              <a href="#">Finstreet 118 2561 Fintown</a>
              <p>Hello@finsweet.com 020 7993 2905</p>
            </div>
            <div className="col-footer  d-flex  justify-content-between">
              <NavLink href="#">
                <FacebookOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </NavLink>
              <NavLink href="#">
                <InstagramOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </NavLink>
              <NavLink href="#">
                <TwitterOutlined style={{ fontSize: "20px", color: "white" }} />
              </NavLink>
              <NavLink href="#">
                <LinkedinOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
