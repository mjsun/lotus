app.factory('UserFactory', function($http){

    var users = [
        {
            _id: '1234',
            email: 'xmd@fsa.com',
            role: 'admin',
            userName: 'Prime',
            description: 'programmer',
            company: 'Monster',
            country: 'U.S',
            url: 'www.google.com',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'

        },
        {
            _id: '12342',
            email: 'xmd@fsa.com',
            role: 'admin',
            userName: 'Prime',
            description: 'programmer',
            company: 'Monster',
            Country: 'U.S',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'

        },
        {
            _id: '12343',
            email: 'xmd@fsa.com',
            role: 'admin',
            userName: 'Prime',
            description: 'programmer',
            company: 'Monster',
            Country: 'U.S',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'
        },
        {
            _id: '12344',
            email: 'xmd@fsa.com',
            role: 'admin',
            userName: 'Prime',
            description: 'programmer',
            company: 'Monster',
            Country: 'U.S',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'

        },
        {
            _id: '2311',
            email: 'xdsd@fsa.com',
            role: 'subscriber',
            userName: 'Teresa',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'
        },
        {
            _id: '12345',
            email: 'xafdmd@fsa.com',
            role: 'subscriber',
            userName: 'Bob',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'
        },
        {
            _id: '1234',
            email: 'xm1sdfd@fsa.com',
            role: 'fellow',
            userName: 'Yol',
            img: 'http://www.mattelder.com/wp-content/gallery/comics/000258e-optimusprime_mattelder.jpg'
        }
    ];

    function getUsers(){
        return $http.get('/api/user/');
    }

    function getUserById(id){
        return $http.get('/api/user/'+id);
    }

    function updateUser(user){
        return $http.put('/api/user/', user);
    }

    function createUser(user){
        return $http.post('/api/user/', user);
    }

    function removeUser(id){
        return $http.delete('/api/user/'+id);
    }
    return {
        getUsers: getUsers,
        getUserById: getUserById,
        updateUser: updateUser,
        createUser: createUser,
        removeUser: removeUser
    };
});
