/**
 * @author Saranraj R
 * @date 18-MAY-2017
 */
app.controller('CategoryController', ['$log', '$scope', '$http', '$location', '$log','dataShare',
    function ($log, $scope, $http, $location, $log, dataShare) {

    	
    $scope.allData = dataShare.allDatas;
    console.log("$scope.allData",angular.toJson($scope.allData))
  
}]);