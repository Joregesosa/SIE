import React from 'react'
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';


export const ExportMenu = (PDFReport, data) => {
    return (
        <div className='px-20 flex gap-4'>
            <PDFDownloadLink document={<PDFReport data={data} />} fileName="contacto.pdf">
                {({ blob, url, loading, error }) => (loading ? '' : <button className='w-12 h-12 bg-gray-600 text-red-300 rounded-full text-2xl pi pi-file-pdf' ></button>)}
            </PDFDownloadLink>


            <BlobProvider document={<PDFReport data={data} />}>
                {({ blob, url, loading, error }) => {

                    if (loading) {
                        return 'Loading document...';
                    }

                    if (error) {
                        alert(`Error: ${error.message}`);
                    }
                    return <button onClick={() => window.open(url, '_blank')} className='w-12 h-12 bg-gray-600 text-white rounded-full text-2xl pi pi-print' >

                    </button>;
                }}
            </BlobProvider>

        </div>

    )
}