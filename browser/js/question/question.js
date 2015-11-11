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
            controller: function($scope, $stateParams, QuestionFactory, question){
                $scope.question = question;
                $scope.updateQuestion = function(){
                    QuestionFactory.updateQuestion($scope.question);
                }
            }
        })
        .state('askQuestion', {
            url: '/question/ask',
            templateUrl: 'js/question/create.html',
            controller: function($scope, QuestionFactory){
                $scope.postQuestion = function(){
                    QuestionFactory.postQuestion($scope.question);
                }
            }
        })
        ;
});
