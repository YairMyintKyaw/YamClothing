import { FormInputLabel, Group, Input } from "./Form-input.styles";

const FormInput = ({ label, ...otherProp }) => {
  return (
    <Group>
      <Input {...otherProp} />

      {label && (
        <FormInputLabel shrink={otherProp.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
