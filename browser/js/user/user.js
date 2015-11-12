app.config(function($stateProvider){

    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'js/user/user.html',
            resolve: {
                users: function(UserFactory){
                    return UserFactory.getUsers().then(function(res){
                        return res.data;
                    });
                }
            },
            controller: function($scope, users){
                $scope.users = users;
            }
        })
        .state('usersDetail', {
            url: '/users/detail/:id',
            templateUrl: 'js/user/profile.html',
            resolve: {
                user: function(UserFactory, $stateParams){
                    return UserFactory.getUserById($stateParams.id).then(function(res){
                        return res.data;
                    });
                },
                questions: function($stateParams, QuestionFactory){
                    return QuestionFactory.getQuestionsByUserId($stateParams.id).then(function(res){
                        return res.data;
                    })
                },
                commentedQuestions : function($stateParams, QuestionFactory){
                    return QuestionFactory.getCommentsByUserId($stateParams.id).then(function(res){
                        return res.data;
                    })
                }
            },
            controller: function($scope, user, UserFactory, questions, commentedQuestions){
                $scope.user = user;
                $scope.questions = questions;
                $scope.commentedQuestions = commentedQuestions;
            }
        })
        .state('usersEdit', {
            url: '/users/edit/:id',
            templateUrl: 'js/user/edit.html',
            resolve: {
                auth: function(AuthService){
                    return AuthService.getLoggedInUser();
                },
                user: function(auth, UserFactory){
                    return UserFactory.getUserById(auth._id)
                        .then(function(res){
                            return res.data;
                        })
                }
            },
            controller: function($scope, user, UserFactory, $state){
                $scope.user = user;
                if(user && $scope.user.links.length === 0){
                    $scope.user.links = [{name: null, url: null}];
                }
                $scope.addLink = function(){
                    var noEmptyUrl = true;
                    angular.forEach($scope.user.links, function(v,k){
                       if(!v.url){
                           noEmptyUrl = false;
                       }
                    });
                    if(noEmptyUrl){
                        $scope.user.links.push({name: null, url: null});
                    }
                };

                $scope.removeLink = function(link){
                    for(var i = 0; i < $scope.user.links.length; i++ ){
                        if($scope.user.links[i].name === link.name && $scope.user.links[i].url === link.url){
                            $scope.user.links.splice(i, 1);
                        }
                    }
                };

                $scope.updateProfile = function(){
                    UserFactory.updateUser($scope.user).then(function(){
                        $state.go('usersDetail', {id: $scope.user._id});
                    });
                };
            }
        });
});
