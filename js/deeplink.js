function openApp() {
  const deepLink = transformQueryToPath();
  window.location.href = deepLink;

  const deepLinkElement = document.getElementById("deepLink");
  if (deepLinkElement) {
    deepLinkElement.setAttribute("href", deepLink);
  }

  setTimeout(() => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.slack";
  }, 2000);
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
