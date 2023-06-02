import React from 'react';
import pdfFile from '../Pdf/Pdf.pdf';

const Pdf = () => {
  return (
    <div>
      {/* Render the PDF file */}
      <embed src={pdfFile} type="application/pdf" width="350%" height="700px" />
    </div>
  );
};

export default Pdf;
