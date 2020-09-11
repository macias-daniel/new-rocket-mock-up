// Component for section titles
angular.module('newRocketMockUp').component('titleElement', {
    template:
        '<div class="row">' +
            '<div class="col-md-12">' +
                '<h5>{{$ctrl.title}}</h5>' +
                '<hr class="hr-1">' +
            '</div>' +
        '</div>',
    bindings: {
        title: '<',
    },
})