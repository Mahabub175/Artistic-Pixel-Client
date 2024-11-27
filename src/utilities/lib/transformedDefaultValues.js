import dayjs from "dayjs";

const excludedKeys = [
  "facebook_group",
  "submit_photo",
  "instagram",
  "sponsor",
  "linked_in",
  "facebook_page",
  "submission_link",
  "pagel_email",
  "pagel_facebook",
  "pagel_instagram",
  "pagel_web",
  "sabbir_email",
  "sabbir_facebook",
  "sabbir_instagram",
  "sabbir_web",
  "twitter",
  "Insta_access_token",
  "pagel_photo",
  "redirect_link",
];

export const transformDefaultValues = (defaultValue, selectedData) => {
  if (!defaultValue) return [];

  const fields = [];

  for (const key in defaultValue) {
    if (defaultValue.hasOwnProperty(key)) {
      let value = defaultValue[key];

      if (value === "true") {
        value = true;
      } else if (key.includes("published_at")) {
        value = dayjs(value, "YYYY-MM-DD");
      } else if (value === "false") {
        value = false;
      } else if (Array.isArray(value) && typeof value[0] === "number") {
        fields.push({
          name: key,
          value: value,
          errors: "",
        });
        continue;
      } else if (Array.isArray(value)) {
        value = value.length > 0 ? value[0] : null;
      } else if (
        typeof value === "string" &&
        value.startsWith("http") &&
        !excludedKeys.includes(key)
      ) {
        value = [{ url: value }];
      }

      fields.push({
        name: key,
        value: value,
        errors: "",
      });
    }
  }

  if (selectedData && Array.isArray(selectedData)) {
    selectedData.forEach((data) => {
      if (Array.isArray(data.value)) {
        fields.push(data);
      }
    });
  }

  return fields;
};
