var user = new GitHub.User("ragtek");
var issuesForOutPut = {};

$issuesContainer = $('#placeholder');

$.each(repos, function (i, v) {
    var repo = user.repo(v);
    issues = repo.issues('open', function (i) {
        $.each(i, function (i, issue) {

            if (issue['labels'][0] == 'bug'){
                $prefix ='<span class="label label-important">Bug</span>';
            }
            else {
                $prefix =  '<span class="label label-info" >' + issue['labels'][0] + '</span>';
            }
            $elem = $( '<li>' + $prefix + ' <a href="' + issue['html_url'] + '" rel="popover" title="' +issue['body'] + '">'   + issue['title'] + '</a> ( ' + issue['repo']['name'] +')</li>');

            $issuesContainer.append($elem);
        })
    });

})

$('#issues').popover({
    selector: "a[rel=popover]",placement: "top"
})

