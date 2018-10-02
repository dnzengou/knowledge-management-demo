var $input = $('input');
var $LastName = $('#Name');


$(document).ready(function() {
    var client = algoliasearch('', '');
    var index = client.initIndex('Document_information');

    $input.keyup(function() {
        index.search($input.val(), {
            hitsPerPage: 10,
            facets: '*'
        }, searchCallback);
    }).focus();
});

function searchCallback(err, content) {
    if (err) {
        console.error(err);
        return;
    }

    $Name.empty();

    for (var i = 0; i < content.hits.length; i++) {
        $Name.append('<li>' + ' ' + '<b>' + ' | ' + 'ID ' + '<i>' + content.hits[i].No + '</i>' + ', ' + '</li>');
    }
};
