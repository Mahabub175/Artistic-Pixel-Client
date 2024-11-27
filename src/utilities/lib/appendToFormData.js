export const appendToFormData = (data, formData) => {
  const filterUndefined = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  };

  const append = (key, value) => {
    if (key === "status") {
      value = value === "true" ? true : value === "false" ? false : value;
    }
    if (key === "is_special") {
      value = value === "true" ? true : value === "false" ? false : value;
    }

    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  };

  const filteredData = filterUndefined(data);

  Object.entries(filteredData).forEach(([key, value]) => {
    append(key, value);
  });
};
