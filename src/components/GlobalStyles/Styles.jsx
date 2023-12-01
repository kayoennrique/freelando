import { css, Global } from "@emotion/react";

const styles = css`
    * {
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Styles = () => {
    return (<Global styles={styles}/>);
}