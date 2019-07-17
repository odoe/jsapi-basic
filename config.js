var locationPath = location.pathname.replace(/\/[^\/]+$/,"");
window.dojoConfig = {
  // points to your app/main.js file
  deps: ["app/main"],
  // tells the AMD loader where to
  // find your javascript files
  packages: [
    {
      name: "app",
      location: locationPath + "app"
    }
  ]
};