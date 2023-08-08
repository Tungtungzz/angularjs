var app = angular.module("myApp", []);
app.controller('myCtrl',function($scope){

    $scope.products = [
        {name:"Product One",price:"22.50"},
        {name:"Product Two",price:"15.00"},
        {name:"Product Four",price:"123.82"},
        { name: "Product Five",price: "123.75"
}
    ];
    $scope.addproduct = function(){
        $scope.products.push($scope.newproduct);
        $scope.newproduct= {};
        $scope.message ="New product Added successfully";
    };
    $scope.selectproduct = function(product){
        console.log(product);
        $scope.clickedproduct = product;

    };
    $scope.editproduct= function(){
        $scope.message ="product Edited successfully";

    };
    $scope.deleteproduct = function(){
        $scope.products.splice($scope.products.indexOf($scope.clickedproduct),1);
        $scope.message ="product Delete successfully";
    };
    $scope.clearMessage = function() {
        $scope.message = "";
    };
})