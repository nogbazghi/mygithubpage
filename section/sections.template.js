<md-card>
<div ng-repeat = "section in $ctrl.sections"  ng-value ="section" id = section>
<md-card-title-text>
      <span class="md-headline" style="display: table;margin:0 auto;">{{section}}</span>
    </md-card-title-text>
</md-card-title>


  <md-divider></md-divider>
  <md-card-content>
  <div ng-if = "section == 'Main'" id = {{section}}>
    <rows></rows>
  </div>
  <div ng-if = "section == 'Projects'" id = {{section}}>
    <p class="lead">These are projects I have been apart of, in various roles.</p>
    <projects></projects>
    <!-- Accessing the images viewed -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">
        <!-- //Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <!-- The Close Button -->
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body" id="showImg">  </div>
        </div>
      </div>
    </div>
    <!-- /container -->
    <script>
        $(document).ready(function() {
            $('img').on("click", function() {
                $("#showImg").empty();
                var image = $(this).attr("src");
                console.log(image);
                $("#showImg").append("<img class='img-responsive' src='" + image + "' />");
            })
        });
    </script>
  </div>
  <div ng-if = "section == 'Personal'" id = {{section}}>
    <personal></personal>
  </div>
  </md-card-content>
</div>
<md-card>
