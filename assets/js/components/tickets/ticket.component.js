angular.module('newRocketMockUp').component('ticketElement', {
    template:   
        '<div class="row">' +
            '<div class="col-md-12">' +
                '<p>{{$ctrl.ticket.title}}</p>' +
                '<h6>{{$ctrl.ticket.id}} - {{$ctrl.ticket.timeSinceRequest}} ago</h6>' +
                '<hr class="hr-3">' +
            '</div>' +
        '</div>',
    bindings: {
        ticket: '<',
    },
})

