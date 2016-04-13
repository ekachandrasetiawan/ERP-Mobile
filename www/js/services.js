angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('LoginService', function($q,$http) {
    return {

        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var today = new Date();
            var timeInMs = today.getDate();
            // console.log(timeInMs+'ini waktunya');
          
            $http(
                {
                    method: 'POST',
                    url: 'http://10.36.15.51:8000/openerp-login/',
                    data: {'usn':name,'pw':pw},
                    headers: {
                        'Authorization': 'Basic ' + "cmV6YTpzdXByYWJha3Rp",
                      
                    },
                    // para
                }
            ).then(
                function successCallback(response){
                    console.log('success');
                    console.log(response)
                    // console.log(response.data['result']);
                    deferred.resolve('Welcome ' + name + '!');
                },
                function errorCallback(response){
                    console.log('erroor',"aaaaaaaaaaaaaaaaaaaaaaaaa");
                    console.log(response);
                    // alert(response.status,response.headers)
                    deferred.reject('Wrong credentials.');
                }
            )
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})


// .service('ErpService',)
;