import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0;
`;

type RadioBoxProps = {
    isActive: boolean,
    activeColor: 'green' | 'red',
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 100%;
    border-radius: 0.25rem;
    border: var(--button-border);
    color: var(--text-title);
    font-weight: 400;
    font-size: 1rem;
    background: ${props => props.isActive ?
        transparentize(0.9, colors[props.activeColor]) :
        'transparent'
    };

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
        font-weight: 600;
    }

    img {
        margin-right: 1rem;
    }
`