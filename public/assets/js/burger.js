
$(() => {
  $(`.change-devour`).on(`click`, function(event) {
    var id = $(this).data(`id`);
    var newDevoured = true;

    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax(`/api/burgers/${ id }`, {
      type: `PUT`,
      data: newDevouredState
    }).then(() => {
      location.reload();
    });
  });

  $(`.remake-burger`).on(`click`, function(event) {
    var id = $(this).data(`id`);
    var newDevoured = false;

    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax(`/api/burgers/${ id }`, {
      type: `PUT`,
      data: newDevouredState
    }).then(() => {
      location.reload();
    });
  });

  $(`.trash-burger`).on(`click`, function(event) {
    var id = $(this).data(`id`);

    $.ajax(`/api/burgers/${ id }`, {
      type: `DELETE`
    }).then(() => {
      location.reload();
    });
  });

  $(`.create-burger`).on(`submit`, event => {
    event.preventDefault();

    var newBurger = {
      name: $(`#burger`).val().trim()
    };

    $.ajax(`/api/burgers`, {
      type: `POST`,
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });
});