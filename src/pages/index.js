import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import TeamImage from "../components/TeamImage"
import SEO from "../components/seo"

const svgRef =
  "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image
      style={{
        height: "calc(100vh - 2rem)",
        backgroundImage: 'url("../images/SVGBackground.jpg")',
        width: "100%",
        zIndex: 1,
      }}
    />
    <div
      style={{
        height: "calc(100vh - 2rem)",
        zIndex: 2,
        position: "absolute",
        top: "3.25rem",
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
        <h1 className="title is-1">The Workday Boulder Softball Team</h1>
        <h3 className="title is-3">Coming Spring 2020</h3>
      </div>
    </div>
    <div
      style={{
        height: "160vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100%",
          paddingTop: "20vh",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
        className={"has-text-centered"}
      >
        <h1 className="title is-1">What is Our Goal?</h1>
        <h3 className="title is-3" style={{ marginBottom: "10vh" }}>
          Our goal is to create a fun softball team for the employees in the
          Workday Boulder office. We will be playing COED intramurals starting
          in the Spring.
        </h3>
        <TeamImage style={{ marginBottom: "20vh" }} />
      </div>
    </div>
    <div
      style={{
        height: "100vh",
        backgroundColor: "#696969",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100%",
          paddingTop: "20vh",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
        className={"has-text-centered"}
      >
        <h1 className="title is-1 has-text-primary">
          What is Our Record So Far?
        </h1>
        <h3
          className="title is-3 has-text-primary"
          style={{ marginBottom: "10vh" }}
        >
          Our team is a very strong...
        </h3>
        <h1
          className="title is-1 has-text-primary"
          style={{ marginBottom: "10vh", fontSize: "15rem" }}
        >
          <strong>1-5</strong>
        </h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
