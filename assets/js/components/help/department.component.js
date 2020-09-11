// Component organizing and laying out each department contact
angular.module('newRocketMockUp').component('departmentElement', {
    template:
        '<div class="col-lg-12 col-sm-6">' +
            '<h5>{{ $ctrl.department.name}}</h5>' +
            '<h6> <span class="help-icons"><i class="far fa-clock"></i></span>&nbsp;&nbsp;{{$ctrl.department.hoursOfOp}}</h6>' +
            '<h6> <span class="help-icons"><i class="fas fa-phone-alt"></i></span>&nbsp;&nbsp; {{$ctrl.department.tollFreeNumber}}</h6>' +
            '<h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desk Phone: #{{$ctrl.department.deskNumber}}</h6>' +
            '<h6> <span class="help-icons"><i class="fas fa-tv"></i></i></span>&nbsp; {{$ctrl.department.email}}</h6>' +
            '<hr class="hr-3">' +
        '</div>',
    bindings: {
        department: '<',
    },
})
