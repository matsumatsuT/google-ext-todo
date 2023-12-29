import { TextField } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
};

// 使わない
export const InputTextFieldRegister = ({ register }: Props) => {
  return <TextField size="small" {...register} />;
};
