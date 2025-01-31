import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const mergePdfs = async (p1, p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2 

  merger.save(`public/merger.pdf`); //save under given name and reset the internal document
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};
