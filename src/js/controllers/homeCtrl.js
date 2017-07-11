/**
 * @author Saranraj R
 * @date 18-MAY-2017
 */
app.controller('HomeController', ['$log', '$scope', '$http', '$location', '$log','dataShare',
    function ($log, $scope, $http, $location, $log, dataShare) {

    		$scope.allData = [{
                  "title":"title1",
                  "image":"image1",
                   "category":
                   {
                    "category1":[
                                 {"title2":"cat1Title1","image":"cat1Imagepath1","link":"url"},
                                 {"title2":"cat1Title2","image":"cat1Imagepath2","link":"url"}
                                ],
                    "category2":[
                                {"title3":"cat2Title2","image":"cat2Imagepath1","link":"url"}
                                ]
                    },
                  "link":""
                 },
                 {
                  "title":"title2",
                  "image":"image2",
                   "category":"",
                  "link":"mainurl"
                 },
                 {
                  "title":"title3",
                  "image":"image3",
                   "category":"",
                  "link":"mainurl"
                 }
                 ];   
dataShare.allDatas = $scope.allData;
var isCategory =false;
var isLink =false;

$scope.loadimage = function(){   
  $log.info("inside the function");

    angular.forEach($scope.allData, function(values, key){
     
       if(values.category){
        $log.info("Inside the category if");
         isCategory = true;
        
    }
       if(values.link != ""){
          isLink = true; 
        
    }
      });
    if(isCategory) {
      $log.info("inside the category--->",isCategory);
      console.log("hello");
       $location.url("/category");
    }
      if(isLink) {
        $log.info("isLink--->",isLink);
         $location.url("/url");
      }
    }	
    
  
}]);