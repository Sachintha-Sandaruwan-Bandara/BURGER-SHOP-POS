import { customers } from "../db/db.js";
document.addEventListener("DOMContentLoaded", function () {
  var btnSave = document.getElementById("customer-save");
  var customerList = document.getElementById("customer-cards");

  //for preloaded customer
  updateCustomerList();

  btnSave.addEventListener("click", function () {
    var id = document.getElementById("customer-id").value;
    var name = document.getElementById("customer-name").value;
    var address = document.getElementById("customer-address").value;
    var salary = document.getElementById("customer-salary").value;
    var customerImageInput = document.getElementById("customer-image").files[0];

    if (customerImageInput) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var customerImage = e.target.result;
        var customer = {
          id: id,
          name: name,
          address: address,
          salary: salary,
          image: customerImage,
        };
        console.log(customer.id);
        customers.push(customer);
        updateCustomerList();
      };

      reader.readAsDataURL(customerImageInput);
    }
  });

  function updateCustomerList() {
    if (customers.length === 0) {
      customerList.innerHTML = "<h1>All customers have been deleted.</h1>";
    } else {
      customerList.innerHTML = "";

      customers.forEach(function (customer) {
        var customerDiv = `
               <div class="card">
                <img  src="${customer.image}" alt="" />
                <h1 > ${customer.id}</h1>
                <h1 > ${customer.name}</h1>
                <h1 > ${customer.address}</h1>
                <h1 > ${customer.salary}</h1>
              </div>
            `;
        customerList.innerHTML += customerDiv;
      });
    }
  }
});
