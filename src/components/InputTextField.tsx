import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
} & TextFieldProps;
export const InputTextField = ({ name, ...rest }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
};
