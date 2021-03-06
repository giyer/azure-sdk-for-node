/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the CertificateOperationUpdateParameter class.
 * @constructor
 * The certificate operation update parameters.
 *
 * @member {boolean} cancellationRequested Indicates if cancellation was
 * requested on the certificate operation.
 * 
 */
function CertificateOperationUpdateParameter() {
}

/**
 * Defines the metadata of CertificateOperationUpdateParameter
 *
 * @returns {object} metadata of CertificateOperationUpdateParameter
 *
 */
CertificateOperationUpdateParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CertificateOperationUpdateParameter',
    type: {
      name: 'Composite',
      className: 'CertificateOperationUpdateParameter',
      modelProperties: {
        cancellationRequested: {
          required: true,
          serializedName: 'cancellation_requested',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = CertificateOperationUpdateParameter;
