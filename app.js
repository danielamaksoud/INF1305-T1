App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Prescription.json", function(prescription) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Prescription = TruffleContract(prescription);
      // Connect provider to interact with contract
      App.contracts.Prescription.setProvider(App.web3Provider);

      App.listenForEvents();

      return App.render();
    });
  },

  // Listen for events emitted from the contract
  listenForEvents: function() {
    App.contracts.Prescription.deployed().then(function(instance) {
      // Restart Chrome if you are unable to receive this event
      // This is a known issue with Metamask
      // https://github.com/MetaMask/metamask-extension/issues/2393
      instance.votedEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("event triggered", event)
        // Reload when a new vote is recorded
        App.render();
      });
    });
  },

  render: function() {
    var prescriptionInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Prescription.deployed().then(function(instance) {
      prescriptionInstance = instance;
      return prescriptionInstance.medicationsCount();
    }).then(function(medicationsCount) {
      var medicationsResults = $("#medicationsResults");
      medicationsResults.empty();

      var medicationsSelect = $('#medicationsSelect');
      medicationsSelect.empty();

      for (var i = 1; i <= medicationsCount; i++) {
        prescriptionInstance.medications(i).then(function(medication) {
          var id = medication[0];
          var name = medication[1];
          var voteCount = medication[2];

          // Render medication Result
          var medicationTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          medicationsResults.append(medicationTemplate);

          // Render medication ballot option
          var medicationOption = "<option value='" + id + "' >" + name + "</ option>"
          medicationsSelect.append(medicationOption);
        });
      }
      return prescriptionInstance.voters(App.account);
    }).then(function(hasVoted) {
      // Do not allow a user to vote
      if(hasVoted) {
        $('form').hide();
      }
      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  },

  castVote: function() {
    var medicationId = $('#medicationsSelect').val();
    App.contracts.Prescription.deployed().then(function(instance) {
      return instance.vote(medicationId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $("#content").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
