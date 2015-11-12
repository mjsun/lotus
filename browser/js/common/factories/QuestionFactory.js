app.factory('QuestionFactory', function($http){
    var questions = [
        {
            _id: '1234',
            title: 'question 1?',
            author: {_id: '12321', name: 'Mingjie'},
            content: 'content of question 1',
            answers: [
                {
                    author: {_id: '12321', name: 'Donnie'},
                    answer: 'answer 1',
                    modified:'15-11-08',
                    correct: false,
                    tags: ['new', 'java'],
                    support:0
                },
                {
                    user: {},
                    answer: 'answer 2',
                    comments: [],
                    modified:'',
                    correct: false,
                    support: 4
                },
                {
                    user: {},
                    answer: 'answer 3',
                    comments: [],
                    modified:'',
                    correct: false,
                    support: 19
                }
            ],
            hits: 14,
            views: 29,
            tags: ['javascript', 'js', 'mongodb'],
            modified: '2015-11-12'
        },
        {
            _id: '2345',
            title: 'question 2?',
            content: 'content of question 2',
            answers: [
                {
                    user: {},
                    answer: '',
                    comments: [],
                    modified:'',
                    correct: false
                }
            ],
            hits: 15,
            views: 30,
            tags: ['c#', 'ruby'],
            createdTime: '',
            modifiedTime: ''

        },
        {
            _id: '3456',
            title: 'question 3?',
            content: 'content of question 3',
            answers: [
                {
                    user: {},
                    answer: '',
                    comments: [],
                    modified:'',
                    correct: false
                }
            ],
            hits: 16,
            views: 31,
            tags: ['c++'],
            createTime: '',
            modifiedTime: ''
        }
    ];

    var getQuestionList = function(){
        return $http.get('/api/question/');
    };

    var getQuestionById = function(id){
        return $http.get('/api/question/' + id);
    };

    var getQuestionsByUserId = function(id){
        return $http.get('/api/question/user/' + id);
    }

    var addComment = function(comment){
        return $http.post('/api/question/comment', comment);
    };

    var postQuestion = function(question){
        return $http.post('/api/question/', question);
    };

    var updateQuestion = function(question){
        return $http.put('/api/question/', question);
    };

    var updateQuestionViews = function(question){
        return $http.put('/api/question/views', question);
    };

    var updateQuestionHits = function(question){
        return $http.put('/api/question/hits', question);
    };

    var removeQuestion = function(id){
        return $http.delete('/api/question/' + id);
    };

    var getCommentsByUserId = function(uid){
        return $http.get('/api/question/comments/' + uid);
    };

    return {
        getQuestionList: getQuestionList,
        getQuestionById: getQuestionById,
        postQuestion: postQuestion,
        addComment: addComment,
        updateQuestion: updateQuestion,
        updateQuestionViews: updateQuestionViews,
        updateQuestionHits: updateQuestionHits,
        getQuestionsByUserId: getQuestionsByUserId,
        removeQuestion: removeQuestion,
        getCommentsByUserId: getCommentsByUserId
    };
});
