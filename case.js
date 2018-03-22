var caseService = function(){
  var self = this;

  this.upsertCase = function(memorialCase){
    if(!memorialCase.hasOwnProperty('MBMS_UUID__c') || memorialCase.MBMS_UUID__c.length == 0 ){
      memorialCase.MBMS_UUID__c = guid();
    }

    return memorialCase;
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