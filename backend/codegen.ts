import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5000/graphql",
  documents: "src/*.graphql",
  generates: {
    "types-and-hooks.tsx:": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
