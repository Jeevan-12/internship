import React from 'react';
import Sidebar from './Components/Sidebar';
import PDFViewer from './Components/Pdf';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <PDFViewer />
    </Box>
  );
}

export default App;
