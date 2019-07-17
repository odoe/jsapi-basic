define(["esri/renderers/DotDensityRenderer",], function(DotDensityRenderer) {
  const dotDensityRenderer = new DotDensityRenderer({
    dotValue: 100,
    outline: null,
    referenceScale: 577790, // 1:577,790 view scale
    legendOptions: {
      unit: "people"
    },
    attributes: [
      {
        field: "B03002_003E",
        color: "#f23c3f",
        label: "White (non-Hispanic)"
      },
      {
        field: "B03002_012E",
        color: "#e8ca0d",
        label: "Hispanic"
      },
      {
        field: "B03002_004E",
        color: "#00b6f1",
        label: "Black or African American"
      },
      {
        field: "B03002_006E",
        color: "#32ef94",
        label: "Asian"
      },
      {
        field: "B03002_005E",
        color: "#ff7fe9",
        label: "American Indian/Alaskan Native"
      },
      {
        field: "B03002_007E",
        color: "#e2c4a5",
        label: "Pacific Islander/Hawaiian Native"
      },
      {
        field: "B03002_008E",
        color: "#ff6a00",
        label: "Other race"
      },
      {
        field: "B03002_009E",
        color: "#96f7ef",
        label: "Two or more races"
      }
    ]
  });

  return dotDensityRenderer;
});