define([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Bookmarks",
  "esri/widgets/Expand",

  // my local modules
  "app/renderer",
  "app/widgets"
], function(
  WebMap,
  MapView,
  FeatureLayer,
  Legend,
  Bookmarks,
  Expand,
  dotDensityRenderer,
  loadWidgets
) {
  const map = new WebMap({
    portalItem: {
      id: "56b5bd522c52409c90d902285732e9f1"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    highlightOptions: {
      fillOpacity: 0,
      color: [50, 50, 50]
    },
    popup: {
      dockEnabled: true,
      dockOptions: {
        position: "top-right",
        breakpoint: false
      }
    },
    constraints: {
      maxScale: 35000
    }
  });

  view.when().then(function() {
    // Add renderer to the layer and define a popup template
    const url =
      "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Population_by_Race_and_Hispanic_Origin_Boundaries/FeatureServer/2";
    const layer = new FeatureLayer({
      url: url,
      minScale: 20000000,
      maxScale: 35000,
      title: "Current Population Estimates (ACS)",
      popupTemplate: {
        title: "{County}, {State}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "B03002_003E",
                label: "White (non-Hispanic)",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_012E",
                label: "Hispanic",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_004E",
                label: "Black or African American",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_006E",
                label: "Asian",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_005E",
                label: "American Indian/Alaskan Native",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_007E",
                label: "Pacific Islander/Hawaiian Native",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_008E",
                label: "Other race",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_009E",
                label: "Two or more races",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              }
            ]
          }
        ]
      },
      renderer: dotDensityRenderer
    });

    map.add(layer);

    loadWidgets(view);
  });
});