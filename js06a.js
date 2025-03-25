"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Marcus Ceradini
      Date:   3/25/25

      Filename: js06a.js
 */

window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;


      model.focus();

      calcOrder();

      function calcOrder() {
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            let modelCost = mValue*quantity;
            orderForm.elements.modelCost.value = modelCost;
      }
});

