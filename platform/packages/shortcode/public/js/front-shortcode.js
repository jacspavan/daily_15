$((function(){var o=$(".shortcode-lazy-loading"),t=window.shortcodeUrl;o.length>0&&o.each((function(o,e){$.ajax({url:t,type:"GET",data:{shortcode:$(e).data("shortcode")},success:function(o){var t=o.error,r=o.data;t||(r&&$(e).replaceWith(r),document.dispatchEvent(new CustomEvent("shortcode.loaded",{detail:{shortcode:$(e).data("shortcode"),content:r}})))},error:function(o){return Theme.handleError(o)}})}))}));