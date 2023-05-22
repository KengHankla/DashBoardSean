let useUrl = `${window.location.protocol}//${window.location.host}/api`;

if (window.location.hostname === "localhost") {
  useUrl = `${window.location.protocol}//${window.location.hostname}:5145/api`;
}

export const apiUrl = useUrl + "/v1";
