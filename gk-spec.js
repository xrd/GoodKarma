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
