
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FileText, Upload, Eye, Download } from 'lucide-react';

const DocumentScannerPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setExtractedData(null);
    }
  };

  const processDocument = async () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    
    // Simulate AI document processing
    setTimeout(() => {
      const mockData = {
        documentType: 'Bill of Lading',
        shipper: 'ABC Manufacturing Co.',
        consignee: 'XYZ Distribution Ltd.',
        vessel: 'MV Ocean Express',
        portOfLoading: 'Shanghai, China',
        portOfDischarge: 'Los Angeles, USA',
        containerNumber: 'MSCU1234567',
        weight: '15,420 kg',
        volume: '45.2 CBM',
        commodityDescription: 'Electronic Components',
        freightTerms: 'CIF',
        confidence: 95
      };
      setExtractedData(mockData);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">AI Document Scanner</h1>
              <p className="mt-4 text-lg text-gray-600">
                Extract data from shipping documents using advanced AI
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  >
                    <span className="font-medium">Click to upload</span> or drag and drop
                  </label>
                  <p className="text-sm text-gray-500 mt-1">
                    PDF, PNG, JPG up to 10MB
                  </p>
                  {selectedFile && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-md">
                      <p className="text-sm font-medium text-blue-800">
                        Selected: {selectedFile.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {selectedFile && (
                <div className="text-center mb-8">
                  <button
                    onClick={processDocument}
                    disabled={isProcessing}
                    className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing Document...' : 'Extract Data'}
                  </button>
                </div>
              )}

              {extractedData && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Extracted Data</h3>
                    <div className="flex items-center text-green-600">
                      <span className="text-sm font-medium">
                        Confidence: {extractedData.confidence}%
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Document Type</label>
                        <p className="text-lg">{extractedData.documentType}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Shipper</label>
                        <p className="text-lg">{extractedData.shipper}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Consignee</label>
                        <p className="text-lg">{extractedData.consignee}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Vessel</label>
                        <p className="text-lg">{extractedData.vessel}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Container Number</label>
                        <p className="text-lg">{extractedData.containerNumber}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Port of Loading</label>
                        <p className="text-lg">{extractedData.portOfLoading}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Port of Discharge</label>
                        <p className="text-lg">{extractedData.portOfDischarge}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Weight</label>
                        <p className="text-lg">{extractedData.weight}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Volume</label>
                        <p className="text-lg">{extractedData.volume}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Freight Terms</label>
                        <p className="text-lg">{extractedData.freightTerms}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex gap-3">
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </button>
                      <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        <Download className="h-4 w-4 mr-2" />
                        Export Data
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DocumentScannerPage;
