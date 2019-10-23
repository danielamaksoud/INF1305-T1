pragma solidity ^0.5.3;

// Referências de contratos
//https://github.com/pbrudny/learning-solidity-2018/blob/master/06_lottery_multiple_winners/06_lottery_multiple_winners.sol
//https://github.com/fabiojose/ethereum-ex/blob/master/contracts/Deal.sol
//https://github.com/thiagola92/BlockchainProject/blob/5bbcdfe858c333d646b346350bf5092163018da0/contracts/Samples.sol

contract Prescription_Contract {

  // Informações gerais do contrato
  string private contract_title;
  string private contract_description;
  address payable private contract_owner_address;
  uint private contract_price_to_add_prescription; // wei

  // Struct que representa as informações da prescricao medica
  struct Prescription {
    address payable prescription_doctor_address;
    address payable prescription_patient_address;
    uint prescription_price; // Custo da prescricao em wei
    uint[] prescription_medications_id;

  }

  // Dado um hash, eu consigo identificar uma sample
  mapping(uint256 => Prescription) private prescription_list;

  constructor() public {
    contract_owner_address = msg.sender;
    contract_title = "Titulo do Contrato de Prescricoes Medicas";
    contract_description = "Contrato para registro de Prescricoes Medicas";
    contract_price_to_add_prescription = 10 wei;
  }

  modifier isContractOwner {
    require(msg.sender == contract_owner_address, "Only the contract owner can call this");
    _;
  }

  function getContractTitle() public view returns (string memory) {
    return contract_title;
  }

  function getContractDescription() public view returns (string memory) {
    return contract_description;
  }

  function getContractOwnerAddress() public view returns (address) {
    return contract_owner_address;
  }

  function getContractPriceToAddPrescription() public view returns (uint256) {
    return contract_price_to_add_prescription;
  }

  function getPrescriptionPrice(uint256 prescription_hash) public view returns (uint) {
    return prescription_list[prescription_hash].prescription_price;
  }

  function getPrescriptionDoctor(uint256 prescription_hash) public view returns (address) {
    return prescription_list[prescription_hash].prescription_doctor_address;
  }

  function setContractTitle(string memory _contract_title) public isContractOwner {
    contract_title = _contract_title;
  }

  function setContractDescription(string memory _contract_description) public isContractOwner {
    contract_description = _contract_description;
  }

  function setContractOwnerAddress(address payable _contract_owner_address) public isContractOwner {
    contract_owner_address = _contract_owner_address;
  }

  function setContractPriceToAddPrescription(uint _contract_price_to_add_prescription) public isContractOwner {
    contract_price_to_add_prescription = _contract_price_to_add_prescription;
  }

  function setPrescriptionPrice(uint256 prescription_hash, uint _prescription_price) public {
    require(msg.sender == prescription_list[prescription_hash].prescription_doctor_address, "Apenas o medico pode alterar o preço da prescricao medica.");

    prescription_list[prescription_hash].prescription_price = _prescription_price;
  }

  // Adiciona uma prescricao medica no contrato
  function addPrescriptionDoctor(uint256 prescription_hash, uint _prescription_price, address payable _patient, uint[] memory _prescription_medications_id) public payable {
      require(prescription_list[prescription_hash].prescription_doctor_address == address(0), "Prescricao medica já possui medico.");
      require(msg.value == contract_price_to_add_prescription, "Preço de adicionar prescricao incorreta.");

      prescription_list[prescription_hash].prescription_doctor_address = msg.sender;
      prescription_list[prescription_hash].prescription_patient_address = _patient;
      prescription_list[prescription_hash].prescription_price = _prescription_price;
      prescription_list[prescription_hash].prescription_medications_id = _prescription_medications_id;
      contract_owner_address.transfer(msg.value);
  }
}
