function TicketsListController($scope, $element, $attrs) {
	var ctrl = this;

	ctrl.title = "MY IT TICKETS"
	ctrl.tickets = [
		{
			title: 'Engineering Laptop -HP ZBook 17 G3',
			id: 'REQ0078372',
			timeSinceRequest: '1d',
		},
		{
			title: 'Engineering Laptop - MacBook Pro 15 inch',
			id: 'REQ564326345',
			timeSinceRequest: '2d',
		},
		{
			title: 'HP ZBook 17 G3 Bundle!',
			id: 'REQ0542353',
			timeSinceRequest: '1y',
		}
	]
}
angular.module('newRocketMockUp').component('ticketList', {
	template:
		'<title-element title="$ctrl.title"></title-element>' +
		'<ticket-element ng-repeat="ticket in $ctrl.tickets" ticket = "ticket"></ticket-element>',
	controller: TicketsListController
})
