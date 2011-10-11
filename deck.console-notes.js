(function($, deck, undefined) {
    if(!console || !console.log){
        return;
    }
    $(document).bind('deck.change', function(e, from, to) {
        console.log(Array(30).join("\n")); // Flush console with a bunch of newlines
        var notes = $[deck]('getSlide', to).find('.notes');
        if(notes.length){
            console.log(notes.text());
        }
    });
})(jQuery, 'deck');

