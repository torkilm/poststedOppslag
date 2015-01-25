var app = angular.module('myApp', ['ngResource']);

app.controller('postCtl', ['$scope', 'postLookup', 
  function ($scope, poststed) {  
    $scope.Search = function () {
      poststed.get({'pnr':$scope.postNr}, function (data) {
        $scope.error = "";
        // Check if data is valid
        if (data.valid) {
          $scope.Resultat = data;
          $scope.sted = data.result;
          console.log(data);
        } else {
          console.log("Invalid!");
          $scope.error = "Ugyldig postnummer!"
        }
        
      }); // End function
    }; //End Search 
  }]); // End controller

app.factory('postLookup', ['$resource', 
  function ($resource){
    return $resource('https://api.bring.com/shippingguide/api/postalCode.json?clientUrl=insertYourClientUrlHere&country=no');
  }]); // End factory https://api.bring.com/shippingguide/api/postalCode.json?clientUrl=insertYourClientUrlHere&country=no&pnr=7056