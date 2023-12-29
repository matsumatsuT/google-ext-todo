/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Popup = () => {
  return (
    <div css={wrapperStyle}>
      <h1>Popup Page</h1>
      <div css={{ color: "pink" }}>テストです</div>
    </div>
  );
};

const wrapperStyle = css({
  width: "100%",
  color: "red",
});
