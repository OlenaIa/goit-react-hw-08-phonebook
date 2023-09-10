import { Circles, MagnifyingGlass, Hourglass, ThreeCircles } from  'react-loader-spinner'
import { Box } from '@mui/material';
import { boxFormStyle } from 'pages/StylePages';
import { boxLoaderStyle } from './StyleLoaders';

export const IsCurrentUserLoader = () => (
  <Box sx={boxLoaderStyle}>
    <ThreeCircles
      height="150"
      width="150"
      color="#2326c7"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </Box>
);

export const Loader = () =>
(<Box sx={boxFormStyle}>
    <MagnifyingGlass
  visible={true}
  height="100"
  width="100"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#2326c7'
/>
</Box>);

export const SpinerDel = () => (
  <Circles
    height="34"
    width="34"
    color="#4c524c"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);

export const LoadAdd = () =>
  <Hourglass
    visible={true}
    height="30"
    width="30"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#ffffff', '#d4d6da']}
  />;