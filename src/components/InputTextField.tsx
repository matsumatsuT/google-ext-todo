import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
} & TextFieldProps;
export const InputTextField = <T extends FieldValues>({
  name,
  control,
  ...rest
}: Props<T>) => (
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
