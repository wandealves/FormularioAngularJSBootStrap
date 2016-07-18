var app = angular.module('studentApp');
app.controller('studentCtrl', [function () {
        self = this;
        self.success = false;
        self.coures = [
            {id: 0, code: "SLE", name: "Selecione"},
            {id: 1, code: "AN", name: "AngularJS"},
            {id: 2, code: "JV", name: "Java"},
            {id: 3, code: "JS", name: "Javascript"}
        ];
        self.submit = function () {
            self.success = true;
            console.log('student ', JSON.stringify(self.student));
        };
    }]);
