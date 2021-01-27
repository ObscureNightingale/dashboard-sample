import React from "react";
import styled from "styled-components";
import { ARedirect, Handler } from "../../declarations/declarations";
import ToggleSwitch from "../Toggle";
import { Item } from "./Item";
import History from "../../history/History";

const Container = styled.div`
    margin-top: 2rem;
    width: 75%;
    font-weight: bold;
`;

const items = [
    { title: "O nama", icon: "information-outline", redirect: "about", active: true },
    { title: "Artikli", icon: "vector-arrange-above", redirect: "articles", active: false },
    { title: "Kontakti", icon: "tooltip-text-outline", redirect: "contact", active: false }
]

export class Menu extends React.Component<Handler> {
    public constructor(props: any) {
        super(props);

        this.state = {
            active: "about"
        }

        this.change = this.change.bind(this);
    }

    change(redirect: any) {

        for (let i = 0; i < items.length; i++) {
            items[i].active = false;

            if (redirect === items[i].redirect)
                items[i].active = true;
        }

        this.setState({
            active: redirect
        });

        History.push(redirect);
    }

    render() {
        return (
            <Container>
                {items.map(item =>
                    <Item title={item.title} icon={item.icon} redirect={item.redirect as ARedirect} active={item.active} change={this.change} />
                )}
                <ToggleSwitch handler={this.props.handler} />
            </Container>
        )
    }
}