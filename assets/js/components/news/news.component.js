function NewsListController($scope, $element, $attrs) {
	var ctrl = this;

	ctrl.title = 'LATEST NEWS'
	ctrl.news = [
		{
			title: 'GBS Portal Now Live!',
			daysSinceUpdate: '24d',
			category: 'General',
			categoryLink: '#',
			summary: 'The new GLobal Business Services portal is now live. This effort presents users with a unified web interface for employees to access information and resources related to HR, IT and Procurment. The n'
		},
		{
			title: 'MockUp Website Completed!',
			daysSinceUpdate: '1d',
			category: 'Development',
			categoryLink: '#',
			summary: 'After some grinding the NewRocket website mock up is finished! Using pervious versions of frameworks taught me to read documentation more carefully, but over all creating this mock up was a great learning expirience!'
		}
	];
}

// Component displaying news section
angular.module('newRocketMockUp').component('newsList', {
	template:
		'<title-element title="$ctrl.title"></title-element>' +
		'<article-element ng-repeat="article in $ctrl.news" article="article"></article-element>',
	controller: NewsListController
})