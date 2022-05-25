$(document).ready(function () {
  $("#ice-cream").click(function (e) {
    e.preventDefault();

    let iceCreamFlavours = ["Vanilla", "Chocolat", "Strawberry", "Coffee", "MintChip", "Pistachio", "Mango", "Neopolatin"," Coconut", "CottonCandy",];

    iceCreamFlavours.forEach(function (iceCreamFlavour) {
      $("#output").append("<li>" .concat(iceCreamFlavour).concat())

    });
  });




});