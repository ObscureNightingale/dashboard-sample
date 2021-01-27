import React from "react";
import { Main } from "../components/Main";
import { Sidebar } from "../components/sidebar/Sidebar";
import styled from "styled-components";
import { Handler } from "../declarations/declarations";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
`;

export class About extends React.Component<Handler> {
    render() {
        return (
            <Container>
                <Sidebar handler={this.props.handler} />
                <Main content="DOBRO DOŠLI U MAXCOM — PRODAJA INFORMATIČKIH UREĐAJA"/>
            </Container>
        );
    }
}