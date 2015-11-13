app.config(function($stateProvider){
    $stateProvider
        .state('question', {
            url: '/question/detail/:id',
            templateUrl: 'js/question/question.html',
            resolve: {
                question: function($stateParams, QuestionFactory){
                    return QuestionFactory.getQuestionById($stateParams.id).then(function(res){
                        return res.data;
                    });
                },
                user: function(AuthService){
                    return AuthService.getLoggedInUser();
                },
                views: function(question, QuestionFactory){
                    return QuestionFactory.updateQuestionViews(question).then(function(res){
                        return res.data;
                    });
                }
            },
            controller: function($scope, $stateParams, AuthService, QuestionFactory, question, user){
                $scope.question = question;
                $scope.addComment = function(){
                    var comment_obj = {
                        questionId: question._id,
                        comment: $scope.comment,
                        tags: $scope.commentTags,
                        author: user
                    };
                    QuestionFactory.addComment(comment_obj);
                };
                $scope.hitQuestion = function(){
                    QuestionFactory.updateQuestionHits($scope.question).then(function(res){
                        console.log(res.data);
                    });
                };
                $scope.isLoggedIn = function () {
                    return AuthService.isAuthenticated();
                };
            }
        })
        .state('editQuestion', {
            url: '/question/edit/:id',
            templateUrl: 'js/question/edit.html',
            resolve: {
               question: function($stateParams, QuestionFactory){
                   return QuestionFactory.getQuestionById($stateParams.id).then(function(res){
                       return res.data;
                   });
               }
            },
            controller: function($scope, $stateParams, QuestionFactory, question, $state){
                $scope.question = question;
                $scope.updateQuestion = function(){
                    QuestionFactory.updateQuestion($scope.question).then(function(){
                        $state.go('question',{id: $scope.question._id});
                    });
                }
            }
        })
        .state('askQuestion', {
            url: '/question/ask',
            templateUrl: 'js/question/create.html',
            resolve: {
                user: function(AuthService){
                    return AuthService.getLoggedInUser();
                }
            },
            controller: function($scope, QuestionFactory, user, $state){
                $scope.postQuestion = function(){
                    $scope.question.author = user;
                    QuestionFactory.postQuestion($scope.question).then(function(){
                        $state.go('home');
                    });
                }
            }
        })
        ;
});
