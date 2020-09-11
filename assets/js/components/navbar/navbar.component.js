angular.module('newRocketMockUp', [])
    .controller('navbarController', ['$scope', function ($scope) {

        // User data to be used in navbar
        $scope.user = {
            lastName: 'Macias',
            language: 'English',
            itemsInCart: 2,
            requests: 3
        };
    }])

    // Component to display Main
    .directive('mainNavbar', function () {
        return {
            template:
                // Navbar accent
                '<div class="main-nav-accent"></div>' +

                // Main nav
                '<nav class="main-nav">' +

                // Main nav logo
                '<a class="nav-logo" href="#">' +
                  '<img src="./assets/images/logo.png" alt="smith & nephew" height="90%">' +
                '</a>' +

                // Meduium and large screen navigation
                '<ul class="nav navbar-nav navbar-right hidden-sm hidden-xs">' +
                    '<li><a href="#">Requests <span class="badge">{{user.requests}}</span></a></li>' +
                    '<li><a href="#"><i class="fas fa-shopping-cart"> </i> <span class="badge">{{user.itemsInCart}}</span></a></li>' +
                    '<li><a href="#"><i class="fas fa-globe-americas"></i> {{user.language}}</a></li>' +
                    '<li><a href="#"><i class="fas fa-user"></i> {{user.lastName}}</a></li>' +
                '</ul>' +

                // Small and XSmall screen navigation
                '<div class="btn-group dropdown-nav hidden-md hidden-lg">' +
                    ' <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                    'Menu <span class="caret"></span>' +
                    '</button>' +
                    '<ul class="dropdown-menu pull-left">' +
                        '<li><a href="#">Requests <span class="badge">{{user.requests}}</span></a></li>' +
                        '<li><a href="#"><i class="fas fa-shopping-cart"> </i> <span class="badge">{{user.itemsInCart}}</span></a></li>' +
                        '<li><a href="#"><i class="fas fa-globe-americas"></i> {{user.language}}</a></li>' +
                        '<li><a href="#"><i class="fas fa-user"></i> {{user.lastName}}</a></li>' +
                    '</ul>' +
                '</div>' +
                '</nav>',
        };
    });