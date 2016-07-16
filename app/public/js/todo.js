
var todoApp = angular.module('todoApp',[]);
var model;
var model2;
var mealMode;
var eaddress;

function onSuccess(googleUser) {
        var name = googleUser.getBasicProfile().getName();
         eaddress = googleUser.getBasicProfile().getEmail();
        var imageurl = googleUser.getBasicProfile().getImageUrl();
//        var userId = googleUser.getBasicProfile().getId();
        localStorage.setItem("email", eaddress);
        console.log(localStorage.email);
        console.log('Name: ' + name);
        console.log('Logged in as: ' + eaddress);
        console.log('Image URL: ' + imageurl);



$.ajax({
  url: 'http://feelmealws.herokuapp.com/profile',
  dataType: 'json',
  type : 'post',
  contentType: 'application/json',
  data: JSON.stringify({ 'email': localStorage.email ,'name' : name}),
  success: function (data) {
    if(data.Error){    // if Error exists move to signIn
      //location.replace("registerform.html");
      //console.log(data.Error);
    }
    else{
      //location.replace("feed-before.html");
    }
  }.bind(this),
  error: function(xhr, status, err) {
    alert(err.toString());
    //console.error(this.props.url, status, err.toString());
  }.bind(this)
});
   

    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    } 


todoApp.run(function($http) {
    $http.get("https://feelmealws.herokuapp.com/getTagsData").success(function(data){
        console.log(data);
        model = data;
    });
});

todoApp.run(function($http) {
    $http.get("https://feelmealws.herokuapp.com/getTagsDetails").success(function(data){
        console.log(data);
        model2 = data;
    });
});

todoApp.controller('ToDoCtrl', function($scope, $http) {
    $http.get("https://feelmealws.herokuapp.com/getTagsData")
    .then(function(response) {
        $scope.myWelcome = response.data;
        $scope.firstTag = response.data[1];
    });
});

todoApp.run(function($http) {
    $http.get("https://feelmealws.herokuapp.com/getMealsData").success(function(data){
        console.log(data);
        mealMode = data;
    });
});
todoApp.controller('mealCtrl', function($scope, $http) {
    $http.get("https://feelmealws.herokuapp.com/getMealsData")
    .then(function(response) {
        $scope.myMeals = response.data;
   
    });

    $scope.func = function(data, dataa2, data3) {
        var body = {a: data, b: dataa2, c: data3, d: localStorage.email};
//        var body2 = { d: localStorage.email};
        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };
        console.log(body);
        $http.post('http://feelmealws.herokuapp.com/addLike', body).success(function (data, status, headers, config) {
            console.log("SUCCESS");

        }).error(function (data, status, headers, config) {
            console.log("ERROR!!" + status);
        });
    };

});

function changeContS() {
document.getElementById('Sweets').innerHTML = "COMING SOON";
};
function changeContH() {
document.getElementById('HOT').innerHTML = "COMING SOON";
};
function changeContSP() {
document.getElementById('SPICY').innerHTML = "COMING SOON";
};
function changeContC() {
document.getElementById('CARBS').innerHTML = "COMING SOON";
};
function changeContHE() {
document.getElementById('HEALTHY').innerHTML = "COMING SOON";
};
function changeContF() {
document.getElementById('FRESH').innerHTML = "COMING SOON";
};



/*    var changeC = document.getElementById('WhereCat').innerHTML = '<div ng-controller="mealCtrl">'+
                '<article ng-repeat="i in myMeals" class= "holder">'+
                        '<span class="ml">{{i.name}}<span class = "size">{{i.size}}</span></span>'+
                        '<br><span class="prce">{{i.price}}</span>'+
                    '<img ng-src="{{i.img_url}}">'+
                    '<img ng-src="{{i.like}}" ng-click="func(i.like, i.id, i.counter)" class = "like">'+
                '<div class="box1">'+
                    '<a href="#popup1"> <img src="images/ordernow.png" class= "ordern"></a>'+
                '</div>'+
                '<div id="popup1" class="overlay1">'+
                    '<div class="popup2">'+
                        '<section class="ordpop"> Your feels<br>will be ready in</section>'+
                        '<a class="close" href="#">&times;</a>'+
                        '<div class="content">'+
                            '<time id="countdown">45:00</time>'+
                        '</div>'+
                        '<section class="ordpop"> Thanks for ordering <br> FeelMeal</section>'+
                    '</div>'+
                '</div>'+
                '</article>'+
        '</div>';
};
*/