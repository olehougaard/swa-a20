import model from './model.js'

const module = angular.module('employeeApp', [])

module.value('$model', { salary: 0, persons: [] })

module.component('employeeTable', {
  bindings: { attribute: '@' },
  template: `<table>
    <thead><tr><td>Id</td><td>Name</td><td>Employee id</td><td>Salary</td><td>Manager</td></tr></thead>
    <tbody id='employee_data'>
        <tr ng-repeat="employee in $ctrl.model[$ctrl.attribute]">
            <td>{{employee.id}}</td>
            <td>{{employee.name}}</td>
            <td ng-if='employee.employeeId'>{{employee.employeeId}}</td>
            <td ng-if='employee.employeeId'>{{employee.salary}}</td>
            <td ng-if='employee.employeeId'>{{employee.manager}}</td>
            <td colspan='3' ng-if='!employee.employeeId'><button ng-click='$ctrl.hire(employee.id)'>Hire</button></td>
        </tr>
    </tbody>
  </table>`,
  controller: ['$model', '$scope', function ($model, $scope) {
    this.model = $model
    // The parent of the component scope is the controller scope
    this.hire = $scope.$parent.hire 
  }]            
})

module.controller('EmployeeController', function($scope, $model, $http) {
  $scope.model = $model
  let aModel
  $http.get('http://localhost:9090/persons')
  .then(({data: persons}) => {
    $http.get('http://localhost:9090/employees')
    .then(({data: employees}) => {
      aModel = model(persons, employees)
      $scope.model.persons = aModel.personData()
    })
  })
  .catch(console.err)

  $scope.hire = id => {
    if ($scope.model.salary > 0) {
      const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
      $http.post('http://localhost:9090/employees', JSON.stringify({salary: $scope.model.salary, manager: false}), { headers })
      .then(({data: employee})=> {
        $http.patch('http://localhost:9090/persons/' + id, JSON.stringify({ employeeId: employee.employeeId }), {headers })
        .then(({data: person}) => {
          aModel.addEmployee(employee)
          aModel.updatePerson(person)
          $scope.model.persons = aModel.personData()
          $scope.model.salary = 0
        })
      })
    }
  }
})
