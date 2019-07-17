define([
  "esri/widgets/Legend",
  "esri/widgets/Bookmarks",
  "esri/widgets/Expand",
], function(
  Legend,
  Bookmarks,
  Expand,
) {

  // function to add widgets
  return function loadWidgets(view) {
    view.ui.add(
      [
        new Expand({
          view: view,
          content: new Legend({ view: view }),
          group: "top-left",
          expanded: true
        }),
        new Expand({
          view: view,
          content: new Bookmarks({ view: view }),
          group: "top-left"
        })
      ],
      "top-left"
    );
  }
});