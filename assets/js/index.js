// jQuery
if (typeof $ !== "undefined") {
  $(document).ready(function () {
    //Image Map
    $("img[usemap]").imageMap();

    // Modal

    $(".modal")
      .modal({
        show: false,
      })
      .on("hidden.bs.modal", function () {
        $(this).find("video")[0].pause();
      });
  });
}
