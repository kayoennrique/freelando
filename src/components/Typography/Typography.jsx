import styled from "@emotion/styled";

const components = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    body2: 'p',
    body2Bold: 'strong',
    subtitle: 'p'
}

const styles = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    h2: `
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
    `,
    h3: `
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `,
    bodyBold: `
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    `,
    body2: `
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    `,
    body2Bold: `
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    `,
    subtitle: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
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