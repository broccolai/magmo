import React, { Component } from "react";
import Link from "next/link";

import styled from "styled-components";
import { white } from "../utilities/Colors";

import config from "../../config.json";

const Container = styled.article`
	align-items: center;
	background: ${white};
	border-radius: 1rem;
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: 1fr 1fr;
	height: auto;
	margin: 2rem;
	padding: 1rem 2rem;
	position: relative;
	transition: 1s ease;
	
	@media (max-width: 768px) {
		margin: 1rem 0;
		padding: 1rem;
		text-align: center;
	}
	*:not(:first-child) {
		z-index: 2;
	}
`;

const Overlay = styled.div`
	background-color: rgba(255, 255, 255, 0.95);
	border-radius: 1rem;
	height: 100%;
	position: absolute;
	width: 100%;
`;

const Profile = styled.img`
	border-radius: 1rem;
	grid-row: 1 / 3;
	height: 7rem;
	
	@media (max-width: 768px) {
		height: 5rem;
	}
`;

const Name = styled.h3`
	margin: 1px;
`;

const Content = styled.h5`
	margin: 1px;
	
	@media (max-width: 768px) {
		font-size: .6rem;
	}
`;

const Info = styled.h4`
	display: inline;
	
	@media (max-width: 768px) {
		font-size: .8rem;
	}
`;

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image: "",
      bio: "",
      url: "",
      repos: "",
      followers: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/users/${
        this.props.input
      }?client_id=${config.client_id}&client_secret=${config.secret_id}`
    )
      .then(response => response.json())
      .then(jsonData =>
        this.setState({
          name: jsonData.name,
          image: jsonData.avatar_url,
          bio: jsonData.bio,
          url: jsonData.html_url,
          repos: jsonData.public_repos,
          followers: jsonData.followers
        })
      );
  }

  render() {
    return (
      <Container
        style={{ background: `center / cover url(${this.state.image})` }}
      >
        <Overlay />
        <Profile src={this.state.image} />
        <div>
          <Name> {this.state.name} </Name>
          <Content> {this.state.bio} </Content>
          <Content>
            <Link href={this.state.url}>
              <a>{this.state.url}</a>
            </Link>
          </Content>
        </div>
        <div>
          <Info> Repos: {this.state.repos} // Followers: {this.state.followers} </Info>
        </div>
      </Container>
    );
  }
}
