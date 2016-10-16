angular.module("app", ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/", {
        templateUrl : "template/home.html",
        controller: 'postCtrl'
    })
    // :id redirige vers l'id du commentaire
    .when("/comments/:id", {
       templateUrl : "template/comments.html",
       controller:'commentsCtrl'
    })
    .otherwise({redirectTo: '/'})
})

.factory("postServices", function(){
	var postServices = {
		posts:[
  {
    "index": 1,
    "name": "MOMENTIA",
    "content": "Proident tempor adipisicing Lorem dolor aliquip adipisicing nostrud excepteur eu elit eiusmod veniam incididunt. Consequat id aliqua cillum occaecat anim esse Lorem adipisicing. Eiusmod esse dolore nostrud commodo reprehenderit. Cillum pariatur sit adipisicing consequat nisi cupidatat esse excepteur deserunt sunt veniam nisi culpa. Exercitation officia dolor consequat dolor irure irure incididunt sit laboris cillum nisi veniam officia occaecat. Qui enim sunt anim ullamco laborum.",
    "picture": "http://lorempicsum.com/up/627/300/5",
    "comments": [
      {
        "_id": "5801ee6f67e312a24a21c53d",
        "name": "Leola Hodge",
        "comment": "Ullamco enim duis ut duis cillum aliquip tempor mollit nostrud proident nostrud. Veniam deserunt pariatur laborum amet aute excepteur et anim. Laborum eiusmod consectetur est commodo. Exercitation quis deserunt occaecat velit nisi consequat velit aliqua ea sint dolore voluptate ea. Aute laboris velit officia non nulla nisi id duis est do.\r\n",
        "picture": "http://lorempicsum.com/up/255/200/1"
      },
      {
        "_id": "5801ee6f147496626667f7e2",
        "name": "Browning Knowles",
        "comment": "Sit ut do officia irure adipisicing ut dolore nisi pariatur. In do aliquip commodo laborum aliquip nulla reprehenderit tempor qui ut ipsum. Incididunt esse sit excepteur officia ad quis exercitation.\r\n",
        "picture": "http://lorempicsum.com/nemo/255/200/1"
      },
      {
        "_id": "5801ee6f3c1ba8128cdda959",
        "name": "Dominguez Bray",
        "comment": "Pariatur enim et est laboris labore mollit voluptate. Amet ad sit eiusmod in est ipsum incididunt id reprehenderit elit est tempor nostrud. Fugiat elit pariatur id est quis veniam do ipsum magna cupidatat elit sint. Ea nostrud ullamco est aliqua ullamco duis laboris nostrud aliquip laboris sint non pariatur. Culpa anim reprehenderit sunt dolore eu ad nulla magna occaecat. Consequat exercitation cupidatat nulla duis deserunt consectetur eu eu consectetur adipisicing Lorem aliquip fugiat adipisicing.\r\n",
        "picture": "http://lorempicsum.com/nemo/255/200/5"
      }
    ]
  },
  {
    "index": 2,
    "name": "MACRONAUT",
    "content": "Eu nulla sunt irure excepteur irure do irure esse laboris dolore dolor. Magna fugiat pariatur aliquip elit eiusmod officia irure. Incididunt reprehenderit magna pariatur velit non irure anim ut dolor. Magna laborum sunt fugiat ad. Consequat qui qui esse commodo cupidatat esse ea magna velit. Deserunt aute eiusmod minim irure cillum excepteur eiusmod tempor elit est.",
    "picture": "http://lorempicsum.com/nemo/627/300/1",
    "comments": [
      {
        "_id": "5801ee6ff6fcaa8b4021cd69",
        "name": "Dorthy Montoya",
        "comment": "Cupidatat esse reprehenderit fugiat proident laboris esse quis Lorem. Irure amet culpa consequat amet. Cupidatat Lorem ipsum qui quis nisi sint et. Minim adipisicing aute reprehenderit in. Excepteur tempor quis laborum qui dolore cupidatat nisi nulla ullamco labore sint. Et ad sit excepteur veniam exercitation. Dolor minim sit laborum tempor consectetur laborum incididunt dolore quis exercitation.\r\n",
        "picture": "http://lorempicsum.com/nemo/255/200/5"
      },
      {
        "_id": "5801ee6f7a7ffa25a14e7499",
        "name": "Montoya Stein",
        "comment": "In reprehenderit deserunt deserunt reprehenderit. Excepteur eu sit ut amet nostrud consectetur officia nostrud. Id cupidatat in non fugiat pariatur laboris exercitation eiusmod nulla sunt et occaecat id pariatur. Duis eu nisi irure nisi ad. Amet amet magna cupidatat sint velit.\r\n",
        "picture": "http://lorempicsum.com/up/255/200/3"
      }
    ]
  },
  {
    "index": 3,
    "name": "GRACKER",
    "content": "Lorem aliquip veniam duis do. Veniam velit consectetur non eu eu non ea in nulla ullamco pariatur qui nulla ea. Anim ut ex ad eiusmod dolor velit ea aute. Cupidatat velit exercitation non sint consectetur tempor enim commodo proident. Fugiat pariatur ex minim dolore. Nulla minim ea nisi sunt excepteur.",
    "picture": "http://lorempicsum.com/nemo/627/300/3",
    "comments": [
      {
        "_id": "5801ee6f4fd0fbeb22606e25",
        "name": "Constance Wilder",
        "comment": "Sunt proident mollit eiusmod do incididunt nostrud nostrud qui incididunt magna sint. Proident aute reprehenderit adipisicing quis Lorem commodo nisi ex esse. Excepteur sunt eiusmod ad nostrud pariatur do eu irure ad tempor et laborum ea occaecat.\r\n",
        "picture": "http://lorempicsum.com/rio/255/200/2"
      },
      {
        "_id": "5801ee6ff958f42ff060265c",
        "name": "Bird Cole",
        "comment": "Fugiat sit labore proident nulla dolor enim et occaecat. Esse velit dolor ullamco labore voluptate ullamco nulla incididunt eu laboris aliqua. Lorem laboris laborum duis ex. Reprehenderit pariatur laboris esse aute velit aute elit mollit pariatur. Excepteur deserunt consequat exercitation quis aute esse cillum.\r\n",
        "picture": "http://lorempicsum.com/futurama/255/200/3"
      },
      {
        "_id": "5801ee6f9e2f0fe164295239",
        "name": "Bridges Allen",
        "comment": "Officia veniam eu qui ad. Magna minim mollit id dolore mollit. Proident veniam cupidatat esse dolor enim id esse. Nulla cupidatat consequat labore veniam cillum occaecat quis consequat consectetur pariatur ut magna tempor qui.\r\n",
        "picture": "http://lorempicsum.com/futurama/255/200/4"
      }
    ]
  },
  {
    "index": 4,
    "name": "AQUASSEUR",
    "content": "Fugiat Lorem tempor velit consectetur est laboris in est minim esse. In mollit ipsum quis incididunt mollit exercitation irure sit reprehenderit culpa ea dolor amet dolor. Est consequat excepteur ex irure do quis consectetur enim. Officia exercitation Lorem consequat laborum laborum. Cillum pariatur esse enim nostrud adipisicing deserunt ullamco pariatur. Et eu deserunt qui ut sint ex nulla ullamco velit velit proident occaecat cupidatat.",
    "picture": "http://lorempicsum.com/nemo/627/300/3",
    "comments": [
      {
        "_id": "5801ee6fffbd632cb2886a51",
        "name": "Amalia Lowery",
        "comment": "Nostrud do cupidatat fugiat dolor ex ut exercitation. Minim tempor minim minim do ipsum ad sint occaecat esse in elit ipsum. Sint laborum officia aliquip aliquip commodo adipisicing aliquip culpa ut. Incididunt est consequat mollit mollit aute est incididunt qui. Sint ipsum eu voluptate esse ipsum laboris enim Lorem qui mollit in. Est do dolor officia adipisicing sunt enim adipisicing excepteur dolore. Velit elit ad aute labore dolor minim aliquip cillum amet ex ex eu id cillum.\r\n",
        "picture": "http://lorempicsum.com/nemo/255/200/3"
      },
      {
        "_id": "5801ee6f1e206d679dcddf40",
        "name": "Eunice Zamora",
        "comment": "Ipsum ut nisi adipisicing dolore occaecat magna labore laborum. Commodo minim officia nostrud eu dolor nostrud in qui. Tempor sint ullamco veniam esse nisi enim reprehenderit est. Eiusmod excepteur pariatur est non commodo. Sunt voluptate eu adipisicing sunt deserunt quis do exercitation duis. Laborum sit proident velit voluptate exercitation deserunt. Duis qui adipisicing magna non eiusmod minim magna dolor.\r\n",
        "picture": "http://lorempicsum.com/nemo/255/200/1"
      }
    ]
  },
  {
    "index": 5,
    "name": "CENTREXIN",
    "content": "Eu labore do laborum non nisi anim aute cupidatat amet enim cillum dolor amet eiusmod. Reprehenderit commodo sit non consectetur excepteur mollit labore aute aliquip. Nisi ad ea incididunt magna in labore irure officia qui. Aute adipisicing laborum laborum aliquip voluptate pariatur amet commodo do id. Labore cupidatat officia non eu voluptate consectetur sint. Reprehenderit mollit aute nostrud laborum.",
    "picture": "http://lorempicsum.com/futurama/627/300/1",
    "comments": [
      {
        "_id": "5801ee6f921908e45d55acbb",
        "name": "Vega Doyle",
        "comment": "Officia enim irure eiusmod laboris. Elit ex duis eiusmod id dolore nulla qui aute. Occaecat sint excepteur ullamco labore commodo. Enim amet magna pariatur nulla nisi nisi magna dolor labore. Sit culpa proident esse mollit ea id ullamco officia eiusmod ea.\r\n",
        "picture": "http://lorempicsum.com/simpsons/255/200/1"
      },
      {
        "_id": "5801ee6fcde03eefd4e451f0",
        "name": "Ashley Johns",
        "comment": "Exercitation non consequat laboris ipsum proident reprehenderit sunt. Officia elit officia ad tempor cupidatat sunt irure anim nisi dolore incididunt velit. Excepteur sit ipsum eiusmod reprehenderit dolor.\r\n",
        "picture": "http://lorempicsum.com/futurama/255/200/4"
      }
    ]
  },
  {
    "index": 6,
    "name": "VENDBLEND",
    "content": "Fugiat sint irure proident sint. Lorem reprehenderit quis ex esse nulla tempor enim sint quis. Esse nulla do enim occaecat. Ex amet veniam commodo aliquip incididunt officia nisi aliquip dolore. Dolore irure ipsum officia reprehenderit aliqua esse. Eu dolor nostrud eu nisi veniam.",
    "picture": "http://lorempicsum.com/simpsons/627/300/2",
    "comments": [
      {
        "_id": "5801ee6fe7f913833d8326f5",
        "name": "Leslie Lindsay",
        "comment": "Nisi reprehenderit magna elit fugiat sint aliquip excepteur ullamco ad tempor aliqua proident incididunt labore. Ad laborum sint ullamco elit ad dolor adipisicing amet sit. Tempor commodo nostrud Lorem magna ad cillum exercitation eu esse veniam nostrud et et sit. Ullamco sunt aute est excepteur nisi aliqua ullamco sit cillum occaecat. Ea aute eiusmod voluptate enim amet fugiat non mollit. Nostrud laboris amet velit sit. Voluptate laborum do non qui nostrud exercitation.\r\n",
        "picture": "http://lorempicsum.com/up/255/200/2"
      },
      {
        "_id": "5801ee6f35c96135f411fb6b",
        "name": "Annie Benton",
        "comment": "Exercitation ad nisi adipisicing tempor adipisicing. Cupidatat anim ut aliquip eu. Commodo consectetur culpa do cillum cillum dolore ea. Nostrud irure eiusmod dolore proident cillum. Nisi aute enim anim nisi esse quis consectetur ut proident. Proident proident mollit labore do elit consequat cupidatat magna quis incididunt Lorem.\r\n",
        "picture": "http://lorempicsum.com/simpsons/255/200/2"
      }
    ]}],
    	getPosts: function(){
    		return postServices.posts;
    	},
    	getPost: function(id){
    		var post = {};
    		angular.forEach(postServices.posts, function(value, key){
    			console.log(postServices.posts);
    			if(value.index == id){
    				post = value
    			}
    		});
    		return post;
    	}
	}
	return postServices;
})

.controller("commentsCtrl", function($scope,postServices, $routeParams){
	var post = postServices.getPost($routeParams.id);
	$scope.title = post.name;
	$scope.comments = post.comments;
	console.log($routeParams.id);

	// ?? Comment récuperer l'id dans l'URL

})

.controller("postCtrl", function($scope, postServices){

$scope.posts = postServices.getPosts();

// console.log("Affiche les posts d'un factory depuis le conroller", postServices.posts);

});