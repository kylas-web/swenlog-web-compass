
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Scan, Upload, FileText, Download, Eye, Check, AlertCircle, Camera } from 'lucide-react';

const DocumentScannerPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    setScanResults(prev => prev.filter((_, i) => i !== index));
  };

  const scanDocuments = async () => {
    if (uploadedFiles.length === 0) return;
    
    setIsScanning(true);
    
    // Simulate AI scanning with progressive results
    for (let i = 0; i < uploadedFiles.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResult = {
        fileName: uploadedFiles[i].name,
        documentType: getDocumentType(uploadedFiles[i].name),
        confidence: 85 + Math.random() * 10,
        extractedData: generateMockExtractedData(uploadedFiles[i].name),
        issues: generateMockIssues(),
        status: Math.random() > 0.8 ? 'warning' : 'success',
        processedAt: new Date().toLocaleString()
      };
      
      setScanResults(prev => [...prev, mockResult]);
    }
    
    setIsScanning(false);
  };

  const getDocumentType = (fileName: string) => {
    const name = fileName.toLowerCase();
    if (name.includes('invoice')) return 'Commercial Invoice';
    if (name.includes('packing')) return 'Packing List';
    if (name.includes('bill') || name.includes('bl')) return 'Bill of Lading';
    if (name.includes('certificate')) return 'Certificate of Origin';
    if (name.includes('customs')) return 'Customs Declaration';
    return 'Shipping Document';
  };

  const generateMockExtractedData = (fileName: string) => {
    const baseData = {
      documentNumber: `DOC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      shipper: 'Global Trading Co.',
      consignee: 'International Imports Ltd.',
      totalValue: `$${(Math.random() * 50000 + 5000).toFixed(2)}`,
      currency: 'USD'
    };

    const docType = getDocumentType(fileName);
    
    switch (docType) {
      case 'Commercial Invoice':
        return {
          ...baseData,
          items: [
            { description: 'Electronic Components', quantity: '500 PCS', unitPrice: '$12.50', total: '$6,250.00' },
            { description: 'Packaging Materials', quantity: '100 KG', unitPrice: '$8.75', total: '$875.00' }
          ],
          paymentTerms: 'Net 30 Days',
          incoterms: 'FOB Shanghai'
        };
      case 'Bill of Lading':
        return {
          ...baseData,
          vesselName: 'EVER GLORY',
          voyageNumber: 'EG-2024-15',
          portOfLoading: 'Shanghai, China',
          portOfDischarge: 'Los Angeles, USA',
          containerNumber: 'MSKU-7439871',
          sealNumber: 'SL-896547'
        };
      case 'Packing List':
        return {
          ...baseData,
          totalPackages: '45 CTNS',
          grossWeight: '2,850 KG',
          netWeight: '2,340 KG',
          dimensions: '120x80x90 CM',
          packages: [
            { cartonNo: '1-15', description: 'Electronic Components', weight: '950 KG' },
            { cartonNo: '16-30', description: 'Accessories', weight: '750 KG' },
            { cartonNo: '31-45', description: 'Manuals & Documentation', weight: '640 KG' }
          ]
        };
      default:
        return baseData;
    }
  };

  const generateMockIssues = () => {
    const possibleIssues = [
      { type: 'warning', message: 'Date format may need verification' },
      { type: 'info', message: 'Currency conversion rate applied' },
      { type: 'warning', message: 'Signature area appears blurred' },
      { type: 'error', message: 'Required field appears to be missing' }
    ];
    
    return Math.random() > 0.6 ? [possibleIssues[Math.floor(Math.random() * possibleIssues.length)]] : [];
  };

  const downloadData = (result: any) => {
    const dataStr = JSON.stringify(result.extractedData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `extracted_data_${result.fileName.split('.')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Scan className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">AI Document Scanner & Processor</h1>
              <p className="mt-4 text-lg text-gray-600">
                Advanced AI-powered extraction of data from shipping and logistics documents
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Upload Panel */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Document Upload</h3>
                  
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload documents</p>
                    <p className="text-sm text-gray-500">Supports PDF, JPG, PNG files</p>
                    <p className="text-xs text-gray-400 mt-2">Max file size: 10MB</p>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {/* Camera Capture Option */}
                  <button className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors">
                    <Camera className="h-4 w-4 mr-2" />
                    Capture with Camera
                  </button>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800 mb-3">Uploaded Files</h4>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-md border">
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-700 truncate max-w-32">{file.name}</span>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scan Button */}
                  <button
                    onClick={scanDocuments}
                    disabled={isScanning || uploadedFiles.length === 0}
                    className="w-full mt-6 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isScanning ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        AI Scanning...
                      </>
                    ) : (
                      <>
                        <Scan className="h-5 w-5 mr-2" />
                        Scan with AI
                      </>
                    )}
                  </button>

                  {/* Document Types Info */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Supported Documents</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Commercial Invoices</li>
                      <li>• Bills of Lading</li>
                      <li>• Packing Lists</li>
                      <li>• Certificates of Origin</li>
                      <li>• Customs Declarations</li>
                      <li>• Insurance Certificates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="lg:col-span-2">
                {scanResults.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">Scan Results</h3>
                      <div className="text-sm text-gray-600">
                        {scanResults.length} document{scanResults.length !== 1 ? 's' : ''} processed
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid gap-4">
                      {scanResults.map((result, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full mr-3 ${
                                result.status === 'success' ? 'bg-green-500' : 
                                result.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                              }`}></div>
                              <div>
                                <h4 className="font-medium text-gray-900">{result.fileName}</h4>
                                <p className="text-sm text-gray-600">{result.documentType}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">
                                {result.confidence.toFixed(1)}% confidence
                              </span>
                              <button
                                onClick={() => setSelectedDocument(result)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => downloadData(result)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                              >
                                <Download className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          {/* Quick Preview */}
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <span className="text-sm font-medium text-gray-700">Document #:</span>
                              <span className="text-sm text-gray-600 ml-2">{result.extractedData.documentNumber}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-700">Date:</span>
                              <span className="text-sm text-gray-600 ml-2">{result.extractedData.date}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-700">Value:</span>
                              <span className="text-sm text-gray-600 ml-2">{result.extractedData.totalValue}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-700">Processed:</span>
                              <span className="text-sm text-gray-600 ml-2">{result.processedAt}</span>
                            </div>
                          </div>

                          {/* Issues */}
                          {result.issues.length > 0 && (
                            <div className="space-y-2">
                              {result.issues.map((issue: any, issueIndex: number) => (
                                <div key={issueIndex} className={`flex items-center p-2 rounded-md text-sm ${
                                  issue.type === 'error' ? 'bg-red-50 text-red-700' :
                                  issue.type === 'warning' ? 'bg-yellow-50 text-yellow-700' :
                                  'bg-blue-50 text-blue-700'
                                }`}>
                                  <AlertCircle className="h-4 w-4 mr-2" />
                                  {issue.message}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {scanResults.length === 0 && !isScanning && (
                  <div className="bg-gray-100 rounded-lg p-12 text-center">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">No documents scanned yet</h3>
                    <p className="text-gray-600">Upload shipping documents to extract data with AI</p>
                  </div>
                )}
              </div>
            </div>

            {/* Detailed View Modal */}
            {selectedDocument && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-6 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {selectedDocument.fileName} - Extracted Data
                    </h3>
                    <button
                      onClick={() => setSelectedDocument(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(selectedDocument.extractedData).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-200 pb-2">
                          <dt className="text-sm font-medium text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </dt>
                          <dd className="text-sm text-gray-900 mt-1">
                            {Array.isArray(value) ? (
                              <div className="space-y-1">
                                {value.map((item: any, index: number) => (
                                  <div key={index} className="text-xs bg-gray-50 p-2 rounded">
                                    {typeof item === 'object' ? JSON.stringify(item) : item}
                                  </div>
                                ))}
                              </div>
                            ) : typeof value === 'object' ? (
                              <pre className="text-xs bg-gray-50 p-2 rounded overflow-x-auto">
                                {JSON.stringify(value, null, 2)}
                              </pre>
                            ) : (
                              value?.toString()
                            )}
                          </dd>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => downloadData(selectedDocument)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download JSON
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DocumentScannerPage;
