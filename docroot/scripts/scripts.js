/* scripts file - js and jquery */


jQuery(document).ready(function($){
  
  // get the path of the current page
  function getPagePath(){
    var path = window.location.pathname+window.location.search;
    return path;
  }
  
  $.ajax({
    type: "GET",
    url: "https://xandermar.github.io/free-github-hosting-with-clean-urls/sitemap.xml",
    dataType: "xml",
    success: function(xml){
      var xmlSort = $(xml).find("page");
      
      // sort based on the cml sort field
      xmlSort.sort(function(a,b){
         a = $(a).find('sort').text();            
         b = $(b).find('sort').text();            
         return (a.localeCompare(b));
      });
      
      var title, sort, desc, content, path;
      xmlSort.each(function(){
        title = $(this).find('title').text();
        sort = $(this).find('sort').text();
        desc = $(this).find('desc').text();
        content = $(this).find('content').text();
        path = $(this).find('path').text();
        if(window.location.host=='xandermar.github.io'){
          path = '/free-github-hosting-with-clean-urls'+path;
        }
        
        //builds the 'list-view'
        $('#list-view > .container').append(`
          <div class="row">
            <div class="col-12">
              <h2><a href="`+path+`">`+title+`</a></h2>
              <div class="desc">`+desc+`</div>
            </div>
          </div>          
        `);
        
        //builds the 'detail-view'
        //select the node that matches the current path
        var currentPath = getPagePath();
        if( path == currentPath ){
          $('#detail-view > .container').append(`
            <div class="row">
              <div class="col-12">
                <h2>`+title+'==> '+getPagePath()+`</h2>
                <div class="content">`+content+`</div>
              </div>
            </div>         
          `);          
        } else {
          // if no node matches, we need a 'page not found'
          $('#detail-view > .container').append(`
            <div class="row">
              <div class="col-12">
                <div class="content">Page not found</div>
              </div>
            </div>         
          `);
          return false;
        }
        
        
        
      });
      
    }
  });
});
