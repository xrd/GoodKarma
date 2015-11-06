## Good Karma

Magical Karma.js Testing

Do this:

```
GoodKarma( 'app' ).
    describe( 'PasswordController', function( PasswordController ) {
        
        describe( '$scope.grade', function() {
            it('sets the strength to "strong" if the password length is >8 chars', function( $scope ) {
                $scope.password = 'longerthaneightcharacters'
                $scope.grade()
                expect( $scope.strength ).toEqual( 'strong' )
            });

            it('sets the strength to "weak" if the password length <3 chars', function( $scope ) {
                $scope.password = 'a';
                $scope.grade();
                expect($scope.strength).toEqual('weak');
            });
        });
    });
```

Instead of this:

```
describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the
      // parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });
  });
});

```