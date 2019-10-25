pragma solidity ^0.5.8; // Solidity Version

contract Prescription { // Contract

	// Model a Medication
	struct Medication {
		uint id;
		string name;
		uint quantity;
	}

	// Store Medications
	// Fetch Medication
	mapping(uint => Medication) public medications;
	// Store Medications Count
	uint public medicationsCount;

	// Constructor
	constructor() public {
		addMedication("Ibuprofeno - Comprimido 300 mg");
		addMedication("Ibuprofeno - Suspensão Oral Gotas 50 mg/mL Frasco");
		addMedication("Paracetamol - Comprimido 500 mg");
		addMedication("Paracetamol - Solução Oral Gotas 200 mg/mL Frasco");
		addMedication("Dipirona Sódica + Prometazina + Adifenina - Solução Injetável 750 mg + 25 mg + 25 mg amp. 2 mL");
	}

	function addMedication (string memory _name) private {
		medicationsCount ++;
		medications[medicationsCount] = Medication(medicationsCount, _name, 0);
	}

}
