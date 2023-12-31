import { InputTextField } from "@/components/InputTextField";
import { Button } from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";

export type PopupFormValues = {
  text: string;
};

type Props = {
  onSubmit: SubmitHandler<PopupFormValues>;
};

export const PopupForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useFormContext<PopupFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextField
        name="text"
        control={control}
        placeholder="todoを入力して下さい"
        size="small"
      />
      <Button type="submit">確定</Button>
    </form>
  );
};
