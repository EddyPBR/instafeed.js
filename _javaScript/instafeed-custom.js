$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'YOUR USERID',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'YOUR ACCESS TOKEN',
        sortBy: 'most-recent',
        template: '<div class="embed-responsive embed-responsive-1by1 col-4 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="embed-responsive-item px-3 pb-3"/></a></div>',
    });
    userFeed.run();
});