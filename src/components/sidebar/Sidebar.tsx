import React from "react";
import styled from "styled-components";
import { Handler } from "../../declarations/declarations";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    left: 0;
    top: 0;
    bottom: 0;
    width: 17%;
    display: flex;
    flex-direction: column;
    align-items: center;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
`;

export class Sidebar extends React.Component<Handler> {
    render() {
        return(
            <Container>
                <Logo />
                <Menu handler={this.props.handler} />
            </Container>
        );
    }
}