app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, $state, UserFactory) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

    $scope.register = function () {
        console.log($scope.signup);
        UserFactory.createUser($scope.signup)
            .then(function(res){
               console.log(res);
                return AuthService.login($scope.signup);
            })
            .then(function(res){
                $state.go('home');
            })
            .catch(function(){
                $scope.error="Invalide login credentials";
            });
    };
});
