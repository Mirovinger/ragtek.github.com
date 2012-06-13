var user = new GitHub.User("ragtek");
$issuesContainer = $('#placeholder');

$.each(repos, function (i, v) {
    var repo = user.repo(v);
    issues = repo.issues('open', function (i) {
        console.log(i);
        $.each(i, function (i, issue) {
            console.log(issue);
            if (issue['labels'][0] == 'bug'){
                $prefix ='<span class="label label-important">Bug</span>';
            }
            else {
                $prefix =  '<span class="label label-info" >' + issue['labels'][0] + '</span>';
            }
            $elem = $( '<tr><td>' + $prefix + '</td><td> &nbsp;<a href="' + issue['html_url'] + '" rel="popover" title="' +issue['body'] + '">'   + issue['title'] + '</a> (<a href="https://github.com/ragtek/' + issue['repo']['name'] +'/issues?state=open">' + issue['repo']['name'] +'</a>)</td></tr>');
            $issuesContainer.append($elem);
        })
    });
})

$('#issues').popover({
    selector: "a[rel=popover]",placement: "right"
})

