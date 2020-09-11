// Component for creating and laying out news article info
angular.module('newRocketMockUp').component('articleElement', {
    template:   
        '<div class="row">'+
            '<div class="col-md-12">'+
                '<h4>{{$ctrl.article.title}}</h4>'+
                '<h6><span class="news-icons"><i class="far fa-clock"></i></span> {{$ctrl.article.daysSinceUpdate}} ago in <a class="accent-hyperlink" href="{{$ctrl.article.categoryLink}}">{{$ctrl.article.category}}</a></h6>'+
                '<p>{{$ctrl.article.summary}}</p>'+
                '<hr class="hr-2">'+
            '</div>'+
        '</div>',
    bindings: {
        article: '<',
    },
})


