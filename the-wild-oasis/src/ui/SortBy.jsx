import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setsearChParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setsearChParams(searchParams);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
