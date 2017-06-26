app.controller('taskCtrl', function($scope) {
	$scope.todos = [
		{text:'Learn AngularJS', done:false},
		{text: 'Build an app', done:false}
	];

	$scope.getTotalTodos = function () {
		// GET THE LENGTH OF THE TASK LIST
		return $scope.todos.length;
	};

	$scope.addTodo = function () {
		// ADD NEW OBJECT TO TASK ARRAY
		$scope.todos.push({text:$scope.formTodoText, done:false});
		// CLEAR FORM FIELD
		$scope.formTodoText = '';
	};

	$scope.deleteTask = function() {
		// LOOP THROUGH ARRAY OF TASKS
		angular.forEach($scope.todos, function(todo, key) {
			if(todo.done == true) {
				// CHECK WHICH ITEM PASSED THE IF STATEMENT
				console.log($scope.todos[key]);
				// REMOVE ITEM FROM ARRAY
				$scope.todos.pop($scope.todos[key]);
				// CONFIRM ITEM WAS REMOVED FROM ARRAY
				console.log($scope.todos);

				// console.log(todo.done + " : " + key);
				// $scope.completed.push($scope.todos[key])
				// console.log(todo.done + " : " + key);
				// console.log($scope.completed);
			};
		});
	};

	// $scope.clearCompleted = function () {
	// 	console.log($scope.todos);
	// 	$scope.todos = console.log($scope.todos, function(todo){
	// 		return !todo.done;
	// 	});
	// };
	// $scope.completed = [];
});
