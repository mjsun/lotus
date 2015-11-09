app.directive('editor', function(){
   return {
       restrict: 'E',
       templateUrl: 'js/common/directives/editor/editor.html',
       scope: {
           fn:'&',
           buttonName: '@'
       },
       controller: function($scope){
           $scope.submit = function(){
               $scope.fn({content: $scope.editorContent});
           };
       },
       link: function(){

       }
   };
});
