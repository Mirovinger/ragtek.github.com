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
            console.log(issue['labels']);
            $elem = $( '<li>[' + issue['labels'][0] + '] <a href="' + issue['html_url'] + '">'   + issue['title'] + '</a> ( ' + issue['repo']['name'] +')</li>');

            $issuesContainer.append($elem);
        })
    });

})
$issuesContainer.html(issuesForOutPut);