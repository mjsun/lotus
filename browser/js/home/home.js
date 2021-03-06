app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        resolve: {
            questions: function(QuestionFactory){
                return QuestionFactory.getQuestionList().then(function(res){
                    return res.data;
                });
            }
        },
        controller: function($scope, QuestionFactory, questions, AuthService){
            $scope.questions = questions;
            $scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };
        }
    });
});
