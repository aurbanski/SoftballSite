import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AlexImage from "../components/AlexImage"
import CatImage from "../components/CatImage"
import RyanImage from "../components/RyanImage"

const PlayersPage = () => (
  <Layout>
    <SEO title="Players" />
    <div
      style={{ marginTop: "6rem", paddingLeft: "5vw", paddingRight: "5vw" }}
      className={"has-text-centered"}
    >
      <h1 className="title is-1">Meet the Players</h1>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <div class="card-image">
              <figure class="image">
                <AlexImage />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="title is-4" style={{ marginBottom: "6px" }}>
                  Alex Urbanski
                </p>
                <strong>Position: </strong>2B <br />
                <strong>Strengths: </strong>Sliding into bases/Instagram DM's
                <br />
                <strong>Fun Fact: </strong>I'm a Cleveland Browns fan
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <div class="card-image">
              <figure class="image">
                <CatImage />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="title is-4" style={{ marginBottom: "6px" }}>
                  Cat Wylie
                </p>
                <strong>Position: </strong>RF <br />
                <strong>Strengths: </strong>She doesn't have any weaknesses
                <br />
                <strong>Fun Fact: </strong>She's a certified scuba diver
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <div class="card-image">
              <figure class="image">
                <RyanImage />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="title is-4" style={{ marginBottom: "6px" }}>
                  Ryan Turner
                </p>
                <strong>Position: </strong>P <br />
                <strong>Strengths: </strong>He actually knows how to play
                <br />
                <strong>Fun Fact: </strong>He predicted the death of Fidel
                Castro
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PlayersPage
