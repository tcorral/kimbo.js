(function(){var n,a,i;a=$("#nav"),n=$("#iframe"),i=(window.location.hash?$(window.location.hash):a.find("a").first()).addClass("current").attr("href"),n.attr("src",i),a.on("click","a",function(){return $(this).addClass("current").parent().siblings().find("a").removeClass("current"),window.location.hash="#"+this.id}),window.setTimeout(function(){return $("#iframe").contents().find("#bs-chart-frame").contents().find("body").css({background:"#fff",padding:"0px",margin:"0px"}),console.log("done")},3e3)}).call(this);