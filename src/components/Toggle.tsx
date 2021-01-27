import React from "react";
import styled from "styled-components";
import { Handler } from "../declarations/declarations";

const Switch = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin-left: 10.5%;
    width: ${({ theme }) => theme.switchWidth};
    height: ${({ theme }) => theme.switchHeight};
    border-radius: 50em;
    padding: ${({ theme }) => theme.switchPadding} 0;
    
    .switch, .switch_l {
        position: absolute;
        left: 0;
        top: 0;
    }

    .switch {
        margin: 0;
        padding: 0;
        opacity: 0;
        height: 0;
        width: 0;
        pointer-events: none;
        &:checked + .switch_l {
            background-color: ${({ theme }) => theme.labelColor};
        }
        &:checked + .switch_l + .switch_m {
            left: calc(100% - ${({ theme }) => theme.switchHeight} + ${({ theme }) => theme.switchPadding});
        }
        &:focus + .switch_l,
        &:active + .switch_l {
            box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.textColor}, 0.2);
        }
    }

    .switch_l {
        width: 100%;
        height: 100%;
        color: transparent;
        user-select: none;
        background-color: ${({ theme }) => theme.labelColor};
        border-radius: inherit;
        z-index: 1;
        transition: background ${({ theme }) => theme.switchAnimationDuration};
    }

    .switch_m {
        position: relative;
        background-color: ${({ theme }) => theme.buttonColor};
        width: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
        height: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
        border-radius: 50%;
        z-index: 2;
        pointer-events: none;
        box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.25);
        left: ${({ theme }) => theme.switchPadding};
        transition: left ${({ theme }) => theme.switchAnimationDuration};
        will-change: left;
    }
`;

export default class ToggleSwitch extends React.Component<Handler> {
    render() {
        return (
            <Switch>
                <input className="switch" type="checkbox" id="switchBox" onClick={this.props.handler} />
                <label aria-hidden="true" className="switch_l" htmlFor="switchBox">On</label>
                <div aria-hidden="true" className="switch_m"></div>
            </Switch>
        );
    }
}