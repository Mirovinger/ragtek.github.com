var Ragtek = {};


Ragtek.Base = 'https://api.github.com/repos/ragtek/';



function getIssues($project){
    $issues = $.getJSON(
        Ragtek.Base + $project + '/issues', function(f){
            console.log(f);
        }

    );
}

  $issues = getIssues('NUNS');

console.log($issues);
