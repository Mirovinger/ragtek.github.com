var Ragtek = {};


Ragtek.Base = 'https://api.github.com/';
   var issues = [];

$.each(repos, function(i,v){
    issues[i] = getIssues(v);
})


function addIssue(issue){
 issues.push(issue);
}

function getIssues($project){
     $.ajax({
        url: Ragtek.Base + 'repos/ragtek/' + $project + '/issues',
        dataType: "jsonp",
        crossDomain: true,
        success: function(returndata) {
            console.log(returndata);
            if (returndata.stat)
           addIssue(returndata);
        }
    });
}

 // $issues = getIssues('NUNS');

//console.log($issues);
