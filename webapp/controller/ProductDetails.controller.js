sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"opensap/manageproducts/ManageProducts/model/formatter"
	], function(Controller, formatter) {
		"use strict";
		
		return Controller.extend("opensap.manageproducts.ManageProducts.controller.ProductDetails", {
			
			formatter: formatter,
		
			onInit: function() {
				//this.byId("categoryLabel").setVisible(true);
				//this.byId("category").setVisible(true);
			}
		});
			
});
