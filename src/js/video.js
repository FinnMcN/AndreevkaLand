$(document).ready(function() {
    function findVideos() {
        let videos = $(".video");
        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = $(video).find(".video__link")[0];
        let media = $(video).find(".video__media")[0];
        let button = $(video).find(".video__button")[0];
        let id = parseMediaURL($(media)[0]);

        $(video).on("click", function () {
            let iframe = createIframe(id);

            $(link)[0].remove();
            $(button)[0].remove();
            $(iframe).appendTo($(video));
        });

        $(link).removeAttr("href");
        $(video).addClass("video--enabled");
    }

    function parseMediaURL(media) {
        
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = $("<iframe></iframe>");

        iframe.addClass("video__media");
        iframe.attr("allowfullscreen", "");
        iframe.attr("frameBorder", "0");
        iframe.attr("allow", "autoplay");
        iframe.attr("src", generateURL(id));
    
        return iframe;
    }

    function generateURL(id) {
        let query = "?rel=0&showinfo=0&autoplay=1";

        return "https://www.youtube.com/embed/" + id + query;
    }

    findVideos();

});
