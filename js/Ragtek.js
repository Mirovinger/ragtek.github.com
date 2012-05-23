var user = new GitHub.User("ragtek");
var issuesForOutPut = {};

$issuesContainer = $('#placeholder');

$.each(repos, function (i, v) {
    var repo = user.repo(v);
    issues = repo.issues('open', function (i) {
        $.each(i, function (i, issue) {
            console.log(issue);
            $elem = $( '<li>[' + issue['labels'][0] + '] <a href="' + issue['html_url'] + '" rel="popover" title="' +issue['body'] + '">'   + issue['title'] + '</a> ( ' + issue['repo']['name'] +')</li>');

            $issuesContainer.append($elem);
        })
    });

})
$issuesContainer.html(issuesForOutPut);

$('#issues').popover({
    selector: "a[rel=popover]",placement: "top"
})
