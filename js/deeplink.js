function openApp() {
  const deepLink = transformQueryToPath();
  const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  const deepLinkElement = document.getElementById("deepLink");
  
  if (isiOS) {
    if (deepLinkElement) {
      deepLinkElement.setAttribute("href", deepLink);
    }
    window.open(deepLink, self);
  } else if (isAndroid) {
    const androidIntent = `intent://${deepLink.replace(/^.*?:\/\//, '')}#Intent;scheme=500ls;end;`;
    if (deepLinkElement) {
      deepLinkElement.setAttribute("href", androidIntent);
    }
    window.location.href = androidIntent;
  }
}

function transformQueryToPath() {
  const baseUrl = "500ls://create";
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);

  let pathUrl = baseUrl;
  params.forEach((value, key) => {
    pathUrl += `/${key}/${encodeURIComponent(value)}`;
  });

  return pathUrl;
}

