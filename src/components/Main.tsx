import React from "react";
import styled, { keyframes } from "styled-components";
import mpl from "../images/maxcom_original.png";

interface MainProps {
    content: string;
}

const slideDown = keyframes`
    from {
        margin-top: -100%;
    }

    to {
        margin-top: 15%;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: table-row;
    position: relative;
`;

const Image = styled.img`
    width: 30%;
    height: 45%;
    margin-top: -100%;
    animation: ${slideDown} .8s;
    animation-fill-mode: forwards;
`;

const Text = styled.p`
    margin-top: 10px;
    -moz-transition: opacity 0.4s ease-in-out;
    -o-transition: opacity 0.4s ease-in-out;
    -webkit-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
    animation: ${fadeIn} .8s;
    animation-fill-mode: forwards;
`;

export class Main extends React.Component<MainProps> {
    render() {
        return (
            <Container>
                <Image src={mpl} alt="mpl" />
                <Text>{this.props.content}</Text>
            </Container>
        );
    }
}