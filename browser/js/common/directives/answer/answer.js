app.directive('answer', function(){
   return {
       restrict: 'E',
       templateUrl: 'js/common/directives/answer/answer.html',
       scope: {
           answer: '='
       },
       link: function(){

       },
       controller: function($scope){
           console.log($scope.answer);
       }
   };
});
