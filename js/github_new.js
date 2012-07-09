var Ragtek = {};


Ragtek.Base = 'https://api.github.com/repos/ragtek/';



function getIssues($project){
     $.ajax({
        url: Ragtek.Base + $project,
        dataType: "jsonp",
        crossDomain: true,
        success: function(returndata) {
            console.log(returndata);
        }
    });
}

  $issues = getIssues('NUNS');

console.log($issues);
