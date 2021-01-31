
$(() => {
  $(`.change-devour`).on(`click`, function(event) {
    const id = $(this).data(`id`);
    const newDevoured = true;

    const newDevouredState = {
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
    const id = $(this).data(`id`);
    const newDevoured = false;

    const newDevouredState = {
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
    const id = $(this).data(`id`);

    $.ajax(`/api/burgers/${ id }`, {
      type: `DELETE`
    }).then(() => {
      location.reload();
    });
  });

  $(`.create-burger`).on(`submit`, event => {
    event.preventDefault();

    const newBurger = {
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