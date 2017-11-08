<div ng-repeat = "part in $ctrl.parts">
<md-card-title-text>
      <span class="md-headline">{{part}}</span>
    </md-card-title-text>
</md-card-title>
<hr>
  <div ng-if ="part == 'About'">
    <p>Random things about me:</p>

    <md-list-item ng-click="null" ng-repeat = "characteristic in $ctrl.characteristics" ng-value ="characteristic">
      <span class="md-1-line">{{characteristic}}</span>
      <md-divider></md-divider>
    </md-list-item>
    <hr>
  </div>
  <div ng-if ="part == 'Instagram'">
    <p> My Instagram shows you moments in my life.</p>
                              <!-- SnapWidget -->
    <script src="https://snapwidget.com/js/snapwidget.js"></script>
    <iframe src="https://snapwidget.com/embed/248392" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>
<hr>
  </div>
  <div ng-if ="part == 'Books'" >
    <p>These are books I have read and would absolutely recommend:</p>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/How-Win-College-Surprising-Countrys/dp/0767917871/ref=sr_1_1?ie=UTF8&qid=1482622825&sr=8-1&keywords=How+to+Win+at+College">How to Win at College</a> - Cal Newport</span>
      <md-divider></md-divider>
    </md-list-item>

    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/How-Become-Straight-Student-Unconventional/dp/0767922719/ref=sr_1_2?ie=UTF8&qid=1482622849&sr=8-2&keywords=How+to+Win+at+College">How to Become a Straight-A Student</a> - Cal Newport</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/Empire-Illusion-Literacy-Triumph-Spectacle/dp/1568586132/ref=sr_1_1?ie=UTF8&qid=1482622869&sr=8-1&keywords=Empire+of+Illusion">Empire of Illusion</a> - Chris Hedges</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535/ref=sr_1_1?ie=UTF8&qid=1482622892&sr=8-1&keywords=How+not+to+be+Wrong%3A+The+Power+of+Mathematical+Thinking">How not to be Wrong: The Power of Mathematical Thinking</a> - Jordan Ellenberg</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930/ref=sr_1_2?ie=UTF8&qid=1482622916&sr=8-2&keywords=Outliers%3A+The+Story+of+Success">Outliers: The Story of Success</a> - Malcolm Gladwell</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/New-Jim-Crow-Incarceration-Colorblindness/dp/1595586431/ref=sr_1_1?ie=UTF8&qid=1482622938&sr=8-1&keywords=The+New+Jim-Crow">The New Jim-Crow</a> - Michelle Alexander</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/Memory-Book-Classic-Improving-School/dp/0345410025/ref=sr_1_1?ie=UTF8&qid=1482622959&sr=8-1&keywords=The+Memory+Book%3A+The+Classic+Guide+to+Improving+Your+Memory">The Memory Book: The Classic Guide to Improving Your Memory...</a> - Harry Lorayne and Jerry  Lucas</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/Brain-Rules-Principles-Surviving-Thriving/dp/0979777747/ref=sr_1_3?ie=UTF8&qid=1482622981&sr=8-3&keywords=Brain+Rules">Brain Rules</a> - John Medina</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/Autobiography-Malcolm-Told-Alex-Haley/dp/0345350685/ref=sr_1_1?ie=UTF8&qid=1482623032&sr=8-1&keywords=The+Autobiography+of+Malcolm+X">The Autobiography of Malcolm X</a> - Alex Haley</span>
    <md-divider></md-divider>
      </md-list-item>
    <md-list-item ng-click="null" >
      <span><a href="https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034/ref=sr_1_1?ie=UTF8&qid=1482623057&sr=8-1&keywords=How+To+Win+Friends+%26+Influence+People">How To Win Friends & Influence People</a> - Dale Carnegie</span>
      <md-divider></md-divider>
    </md-list-item>


<hr>
  </div>

</div>
