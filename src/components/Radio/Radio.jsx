import styled from "@emotion/styled";
import { Field } from "formik";

const LabelStylized = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: ${(props) => props.theme.spacing.xs};
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.xs};
  &:hover {
    &:before {
      border-color: ${(props) => props.theme.colors.focus};
    }
  }
  &:before {
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.neutral.a};
    border-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.checked
        ? props.theme.colors.primary.b
        : props.theme.colors.neutral.c};
    border-color: ${(props) =>
      props.checked ? props.theme.colors.primary.b : "inherit"};
  }
`;

const InputHidden = styled(Field)`
  appearance: none;
  opacity: 0;
  &:focus + label {
    border-radius: 16px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.focus};
  }
`;

const Radio = ({ value, label, checked, name }) => (
  <>
    <InputHidden
      type="radio"
      name={name}
      value={value}
      checked={checked}
      id={`radio-customized-${value}`}
    />
    <LabelStylized htmlFor={`radio-customized-${value}`} checked={checked}>
      {label}
    </LabelStylized>
  </>
);

export default Radio;
