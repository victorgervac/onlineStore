import { useState } from "react";
import { Placeholder } from "semantic-ui-react";

export const useFormInput = (initialValue, name) => {
  const [v, setV] = useState(initialValue);
  return {
    required: "required",
    placeholder: `Enter ${name}`,
    onChange: (e) => setV(e.target.value),
    value: v,
  };
};
