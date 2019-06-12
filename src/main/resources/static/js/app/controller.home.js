angular.module('class_text_spa')
    .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http', '$state', '$scope', '$rootScope'];

function HomeCtrl ($http, $state, $scope, $rootScope){
    var vm = this;
    vm.showRes = 0;
    console.log("ctrl home js");
    vm.checkLang = function () {
        var data = {
            content: vm.text
        }

        $http.post('/checkText', data)
            .success(function (response) {
                vm.showRes = 1;
                vm.lang = response.lang;
            })
    }
    

}