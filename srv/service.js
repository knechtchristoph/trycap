// Imports
const cds = require("@sap/cds");
const { query } = require("express");


/**
 * The service implementation with all service handlers
 */
module.exports = cds.service.impl(async function () {

    // Define constants for the entities from the service.cds file
    const { Customers } = this.entities;


    // connect to remote OData v4 service
    const CustomerSrv = await cds.connect.to("com_sap_gateway_srvd_ux_ui_customer_v0001");

    /**
     * Event-handler for read-events on the Customers entity.
     */
    this.on("READ", Customers, async (req) => {

        return await CustomerSrv.transaction(req).send({
            query: req.query
        });

    });


});