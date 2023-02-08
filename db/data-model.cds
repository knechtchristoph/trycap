namespace try.cap;


// using an OData v4 service from S/4HANA on premise
using {com_sap_gateway_srvd_ux_ui_customer_v0001 as onprem} from '../srv/external/com_sap_gateway_srvd_ux_ui_customer_v0001.csn';

entity Customers as projection on onprem.UX_Customer {
  key CustomerGuid,
      CustomerNumber,
      CustomerName,
      Street,
      PostCode,
      City
}
