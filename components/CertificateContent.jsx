import React from "react";

import CertificateItem from "./CertificateItem";

const CertificateContent = ({ label, data }) => {
  return (
    <div>
      <h5 className="text-xl font-bold">{label}</h5>
      <div className="grid grid-cols md:grid-cols-2 gap-4 my-2 md:my-4">
        {data.map((item, index) => (
          <CertificateItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CertificateContent;
