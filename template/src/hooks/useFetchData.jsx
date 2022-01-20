import { useEffect, useState } from "react";
import { ApiCallHandler } from "../utils/common/api-calls-handler";

export const useFetchData = ({ path, query }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ errorMsg: "", isError: false });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { status, _resToJson } = await ApiCallHandler(
        "GET",
        path + `${query ? "?" + query : ""}`,
        undefined
      );
      if (status === 200) {
        setLoading(false);
        setResult(_resToJson);
      } else {
        setLoading(false);
        setError({
          isError: true,
          errorMsg: _resToJson?.error,
        });
        setTimeout(
          () => setError((prev) => ({ ...prev, isError: false })),
          1500
        );
      }
    };
    fetchData();
  }, []);
  return {
    error,
    loading,
    result,
  };
};
