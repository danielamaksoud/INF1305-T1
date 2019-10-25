var Prescription = artifacts.require("./Prescription.sol");

contract("Prescription", function(accounts) {

	it("Contract initializes with five medications.", function() {
		return Prescription.deployed().then(function(instance) { 
			return instance.medicationsCount();
		}).then(function(count) {
			assert.equal(count, 5);
		});
	});

	it("Contract initializes the medications with the correct values.", function() {
		return Prescription.deployed().then(function(instance) {
			prescriptionInstance = instance;
			return prescriptionInstance.medications(1);
		}).then(function(medication) {
			assert.equal(medication[0], 1, "Contains the correct id.");
			assert.equal(medication[1], "Ibuprofeno - Comprimido 300 mg", "Contains the correct name.");
			assert.equal(medication[2], 0, "Contains the correct quantity.");
			return prescriptionInstance.medications(2);
		}).then(function(medication) {
			assert.equal(medication[0], 2, "Contains the correct id.");
			assert.equal(medication[1], "Ibuprofeno - Suspensão Oral Gotas 50 mg/mL Frasco", "Contains the correct name.");
			assert.equal(medication[2], 0, "Contains the correct quantity.");
			return prescriptionInstance.medications(3);
		}).then(function(medication) {
			assert.equal(medication[0], 3, "Contains the correct id.");
			assert.equal(medication[1], "Paracetamol - Comprimido 500 mg", "Contains the correct name.");
			assert.equal(medication[2], 0, "Contains the correct quantity.");
			return prescriptionInstance.medications(4);
		}).then(function(medication) {
			assert.equal(medication[0], 4, "Contains the correct id.");
			assert.equal(medication[1], "Paracetamol - Solução Oral Gotas 200 mg/mL Frasco", "Contains the correct name.");
			assert.equal(medication[2], 0, "Contains the correct quantity.");
			return prescriptionInstance.medications(5);
		}).then(function(medication) {
			assert.equal(medication[0], 5, "Contains the correct id.");
			assert.equal(medication[1], "Dipirona Sódica + Prometazina + Adifenina - Solução Injetável 750 mg + 25 mg + 25 mg amp. 2 mL", "Contains the correct name.");
			assert.equal(medication[2], 0, "Contains the correct quantity.");
		});
	});

});
