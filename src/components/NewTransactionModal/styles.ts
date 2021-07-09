import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input[type=text], input[type=number] {
        height: 4rem;
        width: 100%;
        border: var(--button-border);
        border-radius: 0.25rem;

        padding: 0 1.5rem;

        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type=submit] {
        height: 4rem;
        width: 100%;
        border: 0;
        border-radius: 0.25rem;
        background-color: var(--green);
        color: #fff;
        margin-top: 1.5rem;
        font-weight: 600;
        font-size: 1rem;

        transition: filter 0.2;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;