import styled from "@emotion/styled";
import { ErrorMessage, Field } from "formik";

const LabelStylized = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const InputStylized = styled(Field)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.neutral.a};
  border-radius: ${(props) => props.theme.spacing.s};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const TextField = ({ title, ...props }) => {
  return (
    <LabelStylized>
      {title}
      <InputStylized {...props} />
      <ErrorMessage name={props.name}>
        {(messages) => (
          <div style={{ color: "red", marginTop: "4x" }}>{messages}</div>
        )}
      </ErrorMessage>
    </LabelStylized>
  );
};
