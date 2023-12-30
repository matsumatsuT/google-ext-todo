import { css } from "@emotion/react";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextField } from "@/components/InputTextField";

type FormProps = {
  text: string;
  test: string;
};

export const Popup = () => {
  const formMethods = useForm<FormProps>({
    defaultValues: {
      text: "",
      test: "",
    },
  });

  const text = formMethods.watch("text");
  const test = formMethods.watch("test");

  return (
    <div css={wrapperStyle}>
      <h1>Popup Page</h1>
      <FormProvider {...formMethods}>
        <InputTextField name="text" control={formMethods.control} />
        <InputTextField name="test" control={formMethods.control} />
        <div>{text}</div>
        <div>{test}</div>
      </FormProvider>
    </div>
  );
};

const wrapperStyle = css({
  width: "1000px",
  height: "2000px",
  minWidth: "500px",
});
