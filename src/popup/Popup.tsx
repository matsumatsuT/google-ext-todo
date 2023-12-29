import { css } from "@emotion/react";

export const Popup = () => {
  return (
    <div css={wrapperStyle}>
      <h1>Popup Page</h1>
    </div>
  );
};

const wrapperStyle = css({
  width: "1000px",
  color: "red",
});
