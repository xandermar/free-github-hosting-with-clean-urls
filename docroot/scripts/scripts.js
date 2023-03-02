/* scripts file - js and jquery */


jQuery(document).ready(function($){
  $.ajax({
    type: "GET",
    url: "https://xandermar.github.io/free-github-hosting-with-clean-urls/sitemap.xml",
    dataType: "xml",
    success: function(xml){
      var xmlSort = $(xml).find("page");
      
      // sort based on the cml sort field
      
    }
  });
}
