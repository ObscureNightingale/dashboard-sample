import React from "react";
import { ThemeProvider } from "styled-components";
import { About } from "./containers/About";
import { Theme } from "./declarations/declarations";
import { GlobalStyles } from "./themes/global";
import { darkT, lightT } from "./themes/theme";

export default class App extends React.Component {

    public constructor(props: any) {
        super(props);

        this.handler = this.handler.bind(this);
        this.state = {
            theme: 'dark'
        } as Theme;
    }

    handler() {
        this.setState({
            theme: (this.state as Theme).theme === 'dark' ? 'light' : 'dark'
        });
    }

    render() {
        console.log((this.state as Theme).theme);
        return (
            <ThemeProvider theme={(this.state as any).theme === 'dark' ? darkT : lightT}>
                <GlobalStyles />
                <About handler={this.handler.bind(this)} />
            </ThemeProvider>
        );
    }
}