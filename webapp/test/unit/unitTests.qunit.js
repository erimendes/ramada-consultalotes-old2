/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ramada/pp/consultalotes/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});