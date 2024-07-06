import React from 'react';
import { Document } from '@react-pdf/renderer';
import CertificationReport from './CertificationReport';
import SummaryReport from './SummaryReport';

export const EnrollmentSummary = ({ data }) => {
    
    console.log(data);
    return (

        <Document>
            <SummaryReport data={data} />
            <CertificationReport data={data} />
        </Document>

    );
}