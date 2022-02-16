import { Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

const ResumeScreen = () => {
  const [width, setWidth] = useState(1200);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Flex mt="85px">
        <Button variant="primary" target="_blank">
          <AiOutlineCloudDownload />
          &nbsp;Download CV
        </Button>
        <Flex>
          <Document
            file="SaboorResume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Flex>
      </Flex>
    </>
  );
};

export default ResumeScreen;
