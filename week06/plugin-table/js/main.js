// custom jQuery goes below here
$("#myTable").dynamicTable({
  columns: [
    {
      text: "Name",
      key : "name"
    },
    {
      text: "Age",
      key : "age"
    },
    {
      text: "Gender",
      key : "gender"
    },
  ],
  data: [
    {
      name: "Mr. Jeff Bloom",
      age: 30,
      gender: "M"
    },
    {
      name: "Ms. Rebeca Jane",
      age: 24,
      gender: "F"
    }
  ],
  getControl: function (columnKey) {
    if (columnKey == "age") {
      return '<input type="number" class="form-control" />';
    }

    if (columnKey == "gender") {
      return '<select class="form-control"><option value="M">Male</option><option value="F">Female</option></select>';
    }

    return '<input type="text" class="form-control" />';
  }
});

// what happens when the button with an id="btnGetData"
$('#btnGetData').click(function () {
  // store data from #mytable
  var data = $("#myTable").getTableData();
  // confirm the value of the data variable
  console.log(data);

  // loop through the array stored in the variable data
  for (var i = 0; i < data.length; i++) {
    // look at each objects properties using the jQuery .each() method
    $.each(data[i], function( index, value ) {
      // confirm the existance of each objects property and value
      console.log( index + ": " + value );
    });
  };

});
