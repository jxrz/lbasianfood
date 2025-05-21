import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Workaround for pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

const PdfViewer: React.FC = () => {
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  // This would be your actual catalog PDF URL
  const catalogUrl = 'https://www.ingenieria.unam.mx/dcsyhfi/material_didactico/Literatura_Hispanoamericana_Contemporanea/Autores_B/BENEDETTI/Poemas.pdf';

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    if (numPages) {
      setPageNumber(prevPageNumber => {
        const newPageNumber = prevPageNumber + offset;
        return Math.min(Math.max(1, newPageNumber), numPages);
      });
    }
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-800" id="catalog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('wholesale.catalog.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            {t('wholesale.catalog.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-blue hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              download="https://www.ingenieria.unam.mx/dcsyhfi/material_didactico/Literatura_Hispanoamericana_Contemporanea/Autores_B/BENEDETTI/Poemas.pdf"
            >
              <Download size={18} className="mr-2" />
              {t('wholesale.catalog.download')}
            </a>
            
            <button
              onClick={() => setIsViewerOpen(true)}
              className="inline-flex items-center justify-center bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white border border-neutral-300 dark:border-neutral-600 py-3 px-6 rounded-lg font-medium transition-colors"
            >
              <FileText size={18} className="mr-2" />
              {t('wholesale.catalog.view')}
            </button>
          </div>
        </div>

        {isViewerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{t('wholesale.catalog.title')}</h3>
                <button 
                  onClick={() => setIsViewerOpen(false)}
                  className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center mb-4">
                <Document
                  file={catalogUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="max-w-full"
                >
                  <Page 
                    pageNumber={pageNumber} 
                    renderTextLayer={false}
                    scale={1}
                    className="shadow-md"
                  />
                </Document>
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={previousPage}
                  disabled={pageNumber <= 1}
                  className={`flex items-center ${
                    pageNumber <= 1 
                      ? 'text-neutral-400 cursor-not-allowed' 
                      : 'text-primary-blue hover:text-blue-700'
                  }`}
                >
                  <ArrowLeft size={18} className="mr-1" />
                  Previous
                </button>
                
                <p className="text-neutral-600 dark:text-neutral-400">
                  Page {pageNumber} of {numPages}
                </p>
                
                <button
                  onClick={nextPage}
                  disabled={numPages !== null && pageNumber >= numPages}
                  className={`flex items-center ${
                    numPages !== null && pageNumber >= numPages
                      ? 'text-neutral-400 cursor-not-allowed' 
                      : 'text-primary-blue hover:text-blue-700'
                  }`}
                >
                  Next
                  <ArrowRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PdfViewer;