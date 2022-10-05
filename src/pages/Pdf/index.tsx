import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const pdf =
  "https://drive.google.com/file/d/1bGryD73k0rgj5NzcezI8jnmOcwvcr2dP/view?usp=sharing";

export const PdfPage = () => {
  return (
    <Document
      file={{
        url: pdf,
      }}
      options={{ workerSrc: "/pdf.worker.js" }}
    >
      <Page pageNumber={1} />
    </Document>
  );
};
