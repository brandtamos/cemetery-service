var caseService = function(){
  var self = this;

  this.upsertCase = function(memorialCases){
    for(var i = 0; i < memorialCases.length; i++) {
      if (!memorialCases[i].hasOwnProperty('MBMS_UUID__c')
          || memorialCases[i].MBMS_UUID__c.length == 0) {
        memorialCases[i].MBMS_UUID__c = guid();
      }
    }
    return memorialCases;
  };
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
module.exports = caseService;