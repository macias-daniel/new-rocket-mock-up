function HelpListController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.title = 'DO YOU NEED HELP?'
    ctrl.departments = [
        {
            name: 'IT',
            hoursOfOp: '0700-1900 CST',
            tollFreeNumber: '844-275-6947',
            deskNumber: '1300-1427',
            email: 'Contact.HR.US@smith-nephew.com'
        },
        {
            name: 'HR',
            hoursOfOp: '0700-1900 CST',
            tollFreeNumber: '777-666-9999',
            deskNumber: '1231-3123',
            email: 'Contact.PR.US@daniel.macias@outlook.com'
        },
        {
            name: 'PR',
            hoursOfOp: '0700-1900 CST',
            tollFreeNumber: '844-275-6947',
            deskNumber: '1300-1427',
            email: 'Contact.PR.US@smith-nephew.com'
        },
    ];
}

// Component to display info for help section
angular.module('newRocketMockUp').component('helpList', {
    template:
        '<title-element title="$ctrl.title"></title-element>' +
        '<div class="row">' +
            '<department-element ng-repeat="department in $ctrl.departments" department="department"></department-element>' +
        '</div>',
    controller: HelpListController
})
