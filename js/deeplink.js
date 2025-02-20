function openApp() {
  const deepLink = transformQueryToPath(); 

  const androidIntent = `intent://${deepLink.replace(/^.*?:\/\//, '')}#Intent;scheme=500ls;end;`;

  const deepLinkElement = document.getElementById("deepLink");
  if (deepLinkElement) {
    deepLinkElement.setAttribute("href", androidIntent);
  }

  console.log(androidIntent);

  window.location.href = androidIntent;
}

function transformQueryToPath() {
  const baseUrl = "500ls://create";
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);

  let pathUrl = baseUrl;
  params.forEach((value, key) => {
    pathUrl += `/${key}/${encodeURIComponent(value)}`;
  });

  console.log(pathUrl);
  return pathUrl;
}
