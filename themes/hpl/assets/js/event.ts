$(document).ready(function() {

  $("#form-general").submit(function (e) {
    var form = $(this);
    var url = form.attr("action");
    var thankYou =
      '<div class="alert alert-danger alert-dismissible fade show" role="alert">Thank you for contacting us. We will get back to you as soon as possible.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
    });

    $("#feedback").html(thankYou);

    e.preventDefault(); // avoid to execute the actual submit of the form.

    // empty all form fields
    const formFeedback = <HTMLFormElement>document.getElementById("form-general");
    formFeedback.reset();
  });

});