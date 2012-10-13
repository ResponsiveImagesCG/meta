/**
This script is used to display issues retrived from github's API. 
Issues are a JSON object, which are then displayed in a list. 

Copyright (c) 2012 Responsive Images Community Group

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

function processResponse(obj) {
	"use strict"; 
    var issue, issues = obj.data,
        issues_html = '<li>No issues are open. Yay!</li>';
    if (issues.errors) {
        console.warn("There was a problem getting the issues from github: " + issues.message, issues.errors)
        return;
    }
    if (issues && issues.length > 0) {
        for (var i = 0, issues_html = ''; i < issues.length; i++) {
            var issue = issues[i],
                labelcount = issue['labels'].length,
                assigned = issue['assignee'] ? "<b class='meta'><span>Assigned:</span> <a href='" + issue['assignee'].url + "'>" + issue['assignee'].login + "</a></b>" : '',
                labels = [];
            if (labelcount !== 0) {
                for (var j = 0; j < labelcount; j++) {
                    labels.push("[ <b style='color: #" + issue['labels'][j].color + "'>" + issue['labels'][j].name + "</b> ]");
                }
            }
            issues_html += '<li><a href="' + issue['html_url'] + '">Issue ' + issue['number'] + '</a> - ' + issue['title'] + assigned + (labelcount ? "<b class='meta'><span>Labels:</span> " + labels.join(" ") + "</b>" : '') + '</li>';
        }
    }
    issues_html = '<ul>' + issues_html + '</ul>';
    document.getElementById('open-issues-xhr').innerHTML = issues_html;
}