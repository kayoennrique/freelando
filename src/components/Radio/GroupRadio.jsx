import { useFormikContext } from "formik";
import Radio from "./Radio";

const GroupRadio = ({ options }) => {
  const { values } = useFormikContext();

  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.label}
          label={option.label}
          checked={option.label === values.interests}
          name="interests"
        />
      ))}
    </div>
  );
};

export default GroupRadio;
