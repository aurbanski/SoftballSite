import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../pages/mystyles.scss"

const Header = ({ siteTitle }) => (
  <nav
    class="navbar is-primary is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      class="navbar-brand"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <a class="navbar-item" href="https://bulma.io"></a>
      <Link to="/">
        <strong>{siteTitle}</strong>
      </Link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <Link style={{ paddingRight: "20px" }} to="/players/">
            <strong>Players</strong>
          </Link>
          <Link style={{ paddingRight: "20px" }} to="/schedule/">
            Schedule
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
