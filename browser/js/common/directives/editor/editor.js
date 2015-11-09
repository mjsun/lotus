app.directive('editor', function(){
   return {
       restrict: 'E',
       templateUrl: 'js/common/directives/editor/editor.html',
       scope: {},
       controller: function($scope){
           $scope.message = 'editor directive';

       },
       link: function(){

       }
   };
});
