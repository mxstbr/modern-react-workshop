// Copied and adapted from https://github.com/jxnblk/mdx-deck/blob/c374ef7d5ec0c91b1414eaae3005eccdcde40630/src/Provider.js
import React from "react";
import { Twitter } from "react-feather";
import styled from "styled-components";
import { previous, next } from "mdx-deck/dist/updaters";
import { modes } from "mdx-deck/dist/constants";

const Bottom = styled.div([], {
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: "1em",
  bottom: "1em",
  color: "#333",
  fontSize: "2em"
});

const Button = styled.div([], {
  cursor: "pointer",
  width: "64px",
  height: "100vh"
});
const Previous = styled(Button)([], {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0
});
const Next = styled(Button)([], {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0
});

export default class Provider extends React.Component {
  render() {
    const { children, mode, index, length, update } = this.props;

    if (mode !== modes.normal) {
      return <React.Fragment>{children}</React.Fragment>;
    }

    return (
      <React.Fragment>
        {children}
        <Bottom>
          <Twitter
            size="1em"
            css={{ verticalAlign: "middle", marginRight: "0.25em" }}
          />{" "}
          @mxstbr
        </Bottom>
        <Previous
          role="button"
          title="Previous Slide"
          onClick={e => {
            update(previous);
          }}
        />
        <Next
          role="button"
          title="Next Slide"
          onClick={e => {
            update(next);
          }}
        />
      </React.Fragment>
    );
  }
}
