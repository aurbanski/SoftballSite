import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import TeamImage from "../components/TeamImage"
import SEO from "../components/seo"

const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" />
    <div
      style={{
        height: "calc(100vh - 2rem)",
        zIndex: 2,
        position: "absolute",
        top: "3.25rem",
        backgroundColor: "#696969",
      }}
      className={"has-text-centered"}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100%",
          paddingTop: "40vh",
        }}
      >
        <h1 className="title is-1 has-text-primary">Softball Team Schedule</h1>
        <h3 className="title is-3 has-text-primary">Coming Soon</h3>
      </div>
    </div>
  </Layout>
)

export default SchedulePage
