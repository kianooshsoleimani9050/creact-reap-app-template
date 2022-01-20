import { BASE_URL } from "../../constant/base";

export const ApiCallHandler = async (
  method = "GET",
  path,
  body = {},
  headers = {},
  baseUrl = BASE_URL
) => {
  const fetchOptions =
    method === "GET"
      ? {
          headers: {
            "content-type": "application/json",
            ...headers,
          },
        }
      : {
          method,
          body: JSON.stringify(body),
          headers: {
            "content-type": "application/json",
            ...headers,
          },
        };
  try {
    const _res = await fetch(baseUrl + path, fetchOptions);
    const _resToJson = await _res.json();
    return {
      status: _res.status,
      _resToJson,
    };
  } catch (error) {
    console.log(error);
    return {
      _resToJson: null,
      status: "UnSuccessful",
    };
  }
};
