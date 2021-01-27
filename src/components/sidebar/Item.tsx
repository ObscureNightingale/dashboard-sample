import React from "react";
import styled from "styled-components";
import { ARedirect } from "../../declarations/declarations";

interface ItemProps {
    change: Function;
    title: string;
    icon: string;
    redirect: ARedirect;
    active?: boolean;
}

const Container = styled.div<{ active: boolean }>`
    border-left: 3px solid ${props => (props as any).active ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    color: ${props => props.active ? props.theme.activeMenu : '#AAA5A5'};

    &:hover {
        background-color: "rgba(0, 0, 0, 0.1)";
    }
`;

const Icon = styled.span`
    font-size: 1rem;
    margin-right: 1rem;
`;

const Title = styled.h1`
    font-size: .9rem;
    font-weight: 400;
`;

export class Item extends React.Component<ItemProps> {
    render() {
        return (
            <Container active={!!this.props.active} onClick={() => this.props.change(this.props.redirect)}>
                <Icon className="iconify" data-icon={`mdi:${this.props.icon}`}></Icon>
                <Title>{this.props.title}</Title>
            </Container>
        )
    }
}