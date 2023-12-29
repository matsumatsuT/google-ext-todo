import { css } from "@emotion/react";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextField } from "@/components/InputTextField";

type FormProps = {
  text: string;
};

export const Popup = () => {
  const formMethods = useForm<FormProps>({
    defaultValues: {
      text: "",
    },
  });

  return (
    <div css={wrapperStyle}>
      <h1>Popup Page</h1>
      <FormProvider {...formMethods}>
        <InputTextField name="test" />
      </FormProvider>
    </div>
  );
};

const wrapperStyle = css({
  width: "1000px",
  height: "2000px",
  minWidth: "500px",
});
