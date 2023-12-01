import styled from "@emotion/styled"

const components = {
    h1: 'h1',
    body: 'p'
}

const styles = {
    h1: `
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    `,
    body: `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    `
}

export const Typography = ({ variant, component, children }) => {
    const tag = components[component];
    const ComponentUsed = styled[tag]`${styles[variant]}`;
    return (<ComponentUsed>
        {children}
    </ComponentUsed>
    );
}