/* Tooltips */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

var postselect1 = document.getElementById("post_date_setting");
var postselect2 = document.getElementById("post_datetime_setting");
var postselect3 = document.getElementById("post_time_setting");
var commentselect1 = document.getElementById("comment_date_setting");
var commentselect2 = document.getElementById("comment_datetime_setting");
var commentselect3 = document.getElementById("comment_time_setting");
var postlimitselection = document.getElementById("post_limit_status");
var commentlimitselection = document.getElementById("comment_limit_status");
postlimitselection.addEventListener("change", function(){
    if(postlimitselection.value == '1'){
        if(postselect1.style.display !== 'flex')
        {
            postselect1.style.display = 'flex';
            postselect2.style.display = 'none';
            postselect3.style.display = 'none';
        }
    }
    if(postlimitselection.value == '2'){
        if(postselect2.style.display !== 'flex')
        {
            postselect1.style.display = 'none';
            postselect2.style.display = 'flex';
            postselect3.style.display = 'none';
        }
    }
    if(postlimitselection.value == '3'){
        if(postselect3.style.display !== 'flex')
        {
            postselect1.style.display = 'none';
            postselect2.style.display = 'none';
            postselect3.style.display = 'flex';
        }
    }
});
commentlimitselection.addEventListener("change", function(){
    if(commentlimitselection.value == '1'){
        if(commentselect1.style.display !== 'flex')
        {
            commentselect1.style.display = 'flex';
            commentselect2.style.display = 'none';
            commentselect3.style.display = 'none';
        }
    }
    if(commentlimitselection.value == '2'){
        if(commentselect2.style.display !== 'flex')
        {
            commentselect1.style.display = 'none';
            commentselect2.style.display = 'flex';
            commentselect3.style.display = 'none';
        }
    }
    if(commentlimitselection.value == '3'){
        if(commentselect3.style.display !== 'flex')
        {
            commentselect1.style.display = 'none';
            commentselect2.style.display = 'none';
            commentselect3.style.display = 'flex';
        }
    }
});