var GoodKarma = function( module ) {
    return {
        describe: function( name, cb ) {
            console.log( cb.toString() );


            cb();
        }
    }

}
