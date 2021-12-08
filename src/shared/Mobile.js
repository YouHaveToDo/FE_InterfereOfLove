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
  height: 896px;
  background-color: #FA4A0C;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Mobile;
