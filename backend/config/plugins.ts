import path from "path";

export default ({ env }) => ({
  seo: {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
  },
  "schemas-to-ts": {
    enabled: true,
    config: {
      destinationFolder: "types/schemas-to-ts",
    },
  },
});
