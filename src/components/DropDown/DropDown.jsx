import styled from "@emotion/styled";
import { useState } from "react";
import { ItemListDrunkStylized } from "./ItemListDrunkStylized";
import { StylizedDropList } from "./StylizedDropList";
import { useFormikContext } from "formik";

const LabelStylized = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const StylizedButton = styled.button`
  cursor: pointer;
  display: block;
  height: 40px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.itsOpen ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.itsOpen ? "0" : "18px")};
  margin-top: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  &:focus {
    border-color: ${(props) => props.theme.colors.focus};
  }
`;

export const DropDown = ({ title, options }) => {
  const [itsOpen, toggleVisibility] = useState(false);
  const { setFieldValue, values } = useFormikContext();
  const [focusedOption, setFocusedOption] = useState(null);

  const manipulateKeyboard = (e) => {
    toggleVisibility(true);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedOption((focusOld) => {
          if (focusOld == null) {
            return 0;
          }
          if (focusOld === options.length - 1) {
            return options.length - 1;
          }
          return (focusOld += 1);
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedOption((focusOld) => {
          if (!focusOld) {
            return 0;
          }
          return (focusOld -= 1);
        });
        break;
      case "Enter":
        e.preventDefault();
        setFocusedOption(null);
        toggleVisibility(false);
        onChange(options[focusedOption]);
        break;
      case "Tab":
        setFocusedOption(null);
        toggleVisibility(false);
        break;
      case "Escape":
        e.preventDefault();
        setFocusedOption(null);
        toggleVisibility(false);
        break;
      default:
        break;
    }
  };

  return (
    <LabelStylized>
      {title}
      <StylizedButton
        itsOpen={itsOpen}
        onClick={() => toggleVisibility(!itsOpen)}
        onKeyDown={manipulateKeyboard}
        type="button"
      >
        <div>{values.state ? values.state : "Selecione"}</div>
        <div>
          <span>{itsOpen ? "▲" : "▼"}</span>
        </div>
      </StylizedButton>
      {itsOpen && (
        <StylizedDropList>
          {options.map((option, index) => (
            <ItemListDrunkStylized
              key={option.value}
              focusActive={index === focusedOption}
              onClick={() => setFieldValue("state", option.text)}
            >
              {option.text}
            </ItemListDrunkStylized>
          ))}
        </StylizedDropList>
      )}
    </LabelStylized>
  );
};
