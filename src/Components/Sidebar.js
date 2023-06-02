import React, { useState } from 'react';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Box, Rating, Typography, Card } from '@mui/material';

function Sidebar() {
  const [val, setVal] = useState(true);

  return (
    <Card sx={{ width: val ? '25%' : '5%', margin: '20px', padding: '20px' }}>
      {val ? (
        <>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
          >
            <Typography sx={{ display: 'flex', justifyContent: 'end' }}>
              <KeyboardDoubleArrowLeftIcon onClick={() => setVal(false)} />
            </Typography>
            <Typography>
              UPSC IFS PREVIOUS PAPERS PDF | INDIAN FOREST SERVICE (MAIN)
              EXAMINATION, 2021 | AGRICULTURAL ENGINEERING PAPER-II
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '10px',
              }}
            >
              <Typography
                sx={{
                  width: '35px',
                  height: '25px',
                  backgroundColor: 'orange',
                  borderRadius: '10px',
                  display: 'flex',
                  textAlign: 'center',
                  paddingLeft: '8px',
                }}
              >
                IFS
              </Typography>
              <Typography
                sx={{
                  width: '35px',
                  height: '25px',
                  backgroundColor: 'orange',
                  borderRadius: '10px',
                  display: 'flex',
                  textAlign: 'center',
                  paddingLeft: '8px',
                }}
              >
                IAS
              </Typography>
              <Typography
                sx={{
                  width: '60px',
                  height: '25px',
                  backgroundColor: 'orange',
                  borderRadius: '10px',
                  display: 'flex',
                  textAlign: 'center',
                  paddingLeft: '8px',
                }}
              >
                INDIAN
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', columnGap: '20px' }}
            >
              <Typography>15 Pages</Typography>
              <Brightness1Icon
                fontSize="2px"
                sx={{ color: 'orange', paddingTop: '4px' }}
              />

              <Typography>12/4/2023</Typography>
            </Box>
          </Box>
          <hr />
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
          >
            <Typography>Reviews & comments</Typography>
            <Box>
              <Typography component="legend"></Typography>
              <Rating name="no-value" value={null} />
            </Box>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
            >
              <input
                type="text"
                style={{
                  width: '300px',
                  height: '50px',
                  borderRadius: '5px',
                  borderColor: 'orange',
                }}
                value={'A Good Quality Book'}
              />
              <Typography
                sx={{
                  width: '45px',
                  height: '25px',
                  backgroundColor: 'orange',
                  borderRadius: '10px',
                  display: 'flex',
                  textAlign: 'center',
                  paddingLeft: '8px',
                }}
              >
                Post
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', columnGap: '200px' }}
            >
              <Typography>Reviews</Typography>
              <KeyboardArrowDownIcon
                sx={{
                  width: '25px',
                  height: '25px',
                  backgroundColor: 'orange',
                  borderRadius: '20px',
                  display: 'flex',
                  textAlign: 'center',
                  paddingLeft: '2px',
                }}
              />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Typography sx={{ display: 'flex', justifyContent: 'end' }}>
              <KeyboardDoubleArrowRightIcon onClick={() => setVal(true)} />
            </Typography>
          </Box>
        </>
      )}
    </Card>
  );
}

export default Sidebar;
