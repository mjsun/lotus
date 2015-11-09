app.factory('QuestionFactory', function(){
    var questions = [
        {
            _id: '1234',
            title: 'question 1?',
            content: 'content of question 1',
            answers: [
                {
                    user: {},
                    answer: 'answer 1',
                    comments: [],
                    modified:'',
                    correct: false
                },
                {
                    user: {},
                    answer: 'answer 2',
                    comments: [],
                    modified:'',
                    correct: false
                },
                {
                    user: {},
                    answer: 'answer 3',
                    comments: [],
                    modified:'',
                    correct: false
                }
            ],
            hits: 14,
            views: 29,
            tags: ['javascript', 'js', 'mongodb'],
            createTime: '',
            modifiedTime: ''
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
        return questions;
    };

    var getQuestionById = function(id){
        for(var i = 0; i<questions.length; i++){
            if(id === questions[i]._id){
                return questions[i];
            }
        }
        return false;
    };

    return {
        getQuestionList: getQuestionList,
        getQuestionById: getQuestionById
    };
});
