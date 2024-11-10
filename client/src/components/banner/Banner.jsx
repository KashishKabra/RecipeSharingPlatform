import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
  background: url(https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center/55% repeat-x #000;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #FFFFFF;
  line-height: 1;
  text-shadow: 2px 2px 10px rgba(255, 165, 0, 1.5); /* Orange glow */
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: rgb(255, 165, 0);
`;

const Banner = () => {
  return (
    <Image>
      <Heading>SpiceShare</Heading>
      <SubHeading>Where every recipe tells a story</SubHeading>
    </Image>
  );
};

export default Banner;

