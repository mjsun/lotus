app.directive('questionList', function(){
    return {
        restrict: 'E',
        scope: {
            questions: '='
        },
        templateUrl: 'js/common/directives/question-list/question-list.html',
        controller: 'QuestionListCtrl',
        link: function(){

        }
    }
});

app.controller('QuestionListCtrl', function($scope){
});
