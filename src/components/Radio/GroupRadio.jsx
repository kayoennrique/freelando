import Radio from "./Radio";

const GroupRadio = ({ options, value, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          label={option.label}
          checked={option.value === value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};

export default GroupRadio;
