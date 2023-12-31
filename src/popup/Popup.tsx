import { css } from "@emotion/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { PopupForm, PopupFormValues } from "./PopupForm";

export const Popup = () => {
  const formMethods = useForm<PopupFormValues>({
    defaultValues: {
      text: "",
    },
  });

  const onSubmit: SubmitHandler<PopupFormValues> = (value) => {
    console.log({ ...value });
    formMethods.setValue("text", "");
  };

  return (
    <div css={wrapperStyle}>
      <h1>TODO入力</h1>
      <FormProvider {...formMethods}>
        <PopupForm onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};

const wrapperStyle = css({
  width: "1000px",
  height: "2000px",
  minWidth: "500px",
});
