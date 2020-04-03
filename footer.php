    <button id="scrollBtn" disabled><i class="fa fa-arrow-up"></i></button>
    <footer>
        <div class="footer">
            <div class="container">
            
                <!--
                        <div class="row">
                <div class="col-sm-10 col-md-4 col-lg-4 footerItem">
                    <label>Cooperating Link</label>
                    <ul class="list-unstyled">
                        <li><a href="www.baidu.com">Baidu</a></li>
                    </ul>
                </div>
                <div class="col-sm-10 col-md-4 col-lg-4 footerItem">
                    <label>Technology Support</label>
                    <ul class="list-unstyled">
                        <li><a href="www.w3school.com">w3school</a></li>
                    </ul>
                </div>
                <div class="col-sm-10 col-md-4 col-lg-4 footerItem">
                    <label>Further Information</label>
                    <ul class="list-unstyled">
                        <li><a href="about.php">About Us</a></li>
                    </ul>
                </div>
                
                <div class="col-sm-10 col-md-4 col-lg-4">
                    <ul class="list-inline text-center">
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="bgItem fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook-f fa-stack-1x fa-inverse" onclick=window.open("https://facebook.com")></i></span></li>
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="bgItem fa fa-circle fa-stack-2x"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></li>
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="bgItem fa fa-circle fa-stack-2x"></i><i class="fa fa-phone fa-stack-1x fa-inverse"></i></span></li>
                    </ul>
                </div>
               
            </div> -->
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <p class="text-muted copyright">Copyright&nbsp;©&nbsp;Panacea 2019</p>
                </div>
            </div>
            </div>
        </div>
    </footer>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#mainNav .navbar-nav>li.nav-item>a").each(function () {
                if ($($(this))[0].href == String(window.location))
                    $(this).parent().addClass('active');
            });
        });  
        
        scrollBtn.onclick = function(){
            var top = document.body.scrollTop || document.documentElement.scrollTop
            scrollBy(0,-top);
        };
        window.onscroll = function() {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop == 0) {
            $("#scrollBtn").removeClass("active");
            $("#scrollBtn").attr('disabled','');
          }else{          
            $("#scrollBtn").addClass("active");
            $("#scrollBtn").removeAttr('disabled');
          }
}
    </script>
