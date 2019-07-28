import React from "react";
import styled from "styled-components";
import { faDog, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { black, white, cyan } from "../utilities/Colors";
import Card from "./Card";

const Main = styled.main`
  background-color: ${black};
  min-height: 84vh;

  @media (max-width: 768px) {
    min-height: 82vh;
  }
`;

const Search = styled.section`
  display: grid;
  justify-content: center;
  align-content: center;
  background: ${cyan};
  padding: 0 2rem 2rem;
  text-align: center;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

const Content = styled.section`
  margin: auto;
  padding: 2rem;
`;

const Submission = styled.div`
  max-width: 80vw;
`;

const Title = styled.h1`
  color: ${white};
  font-family: "Zilla", monospace;
  font-size: 3rem;
  letter-spacing: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }
`;

const Dog = styled(FontAwesomeIcon)`
  height: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Add = styled(FontAwesomeIcon)`
  font-size: 1rem;
  height: 1rem;
  transition: all 0.4s ease-out;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    height: 0.6rem;
  }
`;

const Username = styled.input`
  border: none;
  background: ${white};
  color: ${black};
  font-size: 1rem;
  padding: 0.844rem;
  border-radius: 2rem;
  outline: none;
`;

const Go = styled.button`
  background: ${white};
  padding: 1rem;
  border: none;
  width: min-content;
  border-radius: 4rem;
  margin: 0 0 0 1rem;

  :hover {
    color: ${cyan};
  }
`;

export default class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      newItem: ""
    };

    this.addItem = this.addItem.bind(this);
    this.change = this.change.bind(this);
    this.enter = this.enter.bind(this);
  }

  change(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  enter(e) {
    if (e.key == "Enter") this.addItem2(this.state.newItem);
  }

  addItem() {
    this.setState({
      items: [...this.state.items, this.state.newItem]
    });
  }

  addItem2(item) {
    this.setState({
      items: [...this.state.items, item]
    });
  }

  render() {
    return (
      <Main>
        <Search>
          <Title>
            BLOODHOUND <Dog icon={faDog} />
          </Title>
          <Submission>
            <Username
              id="search"
              type="text"
              placeholder="Username..."
              value={this.state.newItem}
              onChange={event => {
                this.change(event);
              }}
              onKeyDown={event => {
                this.enter(event);
              }}
            />

            <Go onClick={this.addItem}>
              <Add icon={faPlus} />
            </Go>
          </Submission>
        </Search>
        <Content>
          {this.state.items.map((item) => (
            <Card key={item.toString()} input={item} />
          ))}
        </Content>
      </Main>
    );
  }
}
