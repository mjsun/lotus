app.config(function($stateProvider){
    $stateProvider
        .state('question', {
            url: '/question/:id',
            templateUrl: 'js/question/question.html',
            controller: function($scope, $stateParams, QuestionFactory){
                $scope.question = QuestionFactory.getQuestionById($stateParams.id);
            }
        });
});
