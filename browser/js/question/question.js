app.config(function($stateProvider){
    $stateProvider
        .state('question', {
            url: '/question/detail/:id',
            templateUrl: 'js/question/question.html',
            controller: function($scope, $stateParams, QuestionFactory){
                $scope.question = QuestionFactory.getQuestionById($stateParams.id);
                $scope.addComment = function(n){
                    console.log('comment', n);
                };
            }
        })
        .state('editQuestion', {
            url: '/question/edit',
            templateUrl: 'js/question/edit.html',
            controller: function($scope, $stateParams, QuestionFactory){
                $scope.question = QuestionFactory.getQuestionById($stateParams.id);
                $scope.updateQuestion = function(n){
                    console.log('edit', n);
                }
            }
        })
        .state('askQuestion', {
            url: '/question/ask',
            templateUrl: 'js/question/create.html',
            controller: function($scope, QuestionFactory){
                $scope.createQuestion = function(n){
                    console.log('create', n);
                }
            }
        })
        ;
});
