var user = new GitHub.User("ragtek");
var issuesForOutPut = {};
var repos = [
    'ragtek.github.com',
    'GCT',
    'InfoPage',
     'WHW',
    'AQR',
    'TO'

];
$issuesContainer = $('#placeholder');

$.each(repos, function (i, v) {
    var repo = user.repo(v);
    issues = repo.issues('open', function (i) {
        $.each(i, function (i, issue) {
            console.log(issue);
            $elem = $( '<li>[' + issue['labels'][0] + '] <a href="' + issue['html_url'] + '" rel="tooltip" title="' +issue['body'] + '">'   + issue['title'] + '</a> ( ' + issue['repo']['name'] +')</li>');

            $issuesContainer.append($elem);
        })
    });

})
$issuesContainer.html(issuesForOutPut);

$('#issues').tooltip({
    selector: "a[rel=tooltip]"
})
