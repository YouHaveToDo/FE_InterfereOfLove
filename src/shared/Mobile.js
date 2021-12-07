import React from "react";
import styled from "styled-components";

const Mobile = (props) => {
  // const { is_position, top, right } = props;

  return (
    <React.Fragment>
      <MobileBox {...props}></MobileBox>
    </React.Fragment>
  );
};

// Mobile.defaultProps = {
//   is_position: false,
//   top: "0",
//   right: "0",
// };

const MobileBox = styled.div`
  max-width: 414px;
  width: 414px;
  height: 100vh;
  border: 1px solid #333;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default Mobile;
