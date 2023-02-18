set -e
RED='\033[0;31m'
GREEN='\033[0;32m'
NO_COLOR='\033[0m'
echo "${RED}Generating Mutations and Queries:"


# Code Gen 
cd backend

npx amplify-graphql-docs-generator --schema src/schema.gql --output src/graphql/ --language graphql --separateFiles true --maxDepth 6

# rsync src/schema.gql ../client/src




# Front-end
# rsync src/graphql/queries.graphql ../client/src/api/schema/queries/
# rsync src/graphql/mutations.graphql ../client/src/api/schema/mutation/

echo "${GREEN}Done: Generating Mutations and Queries:${NO_COLOR}"

cd ..

pwd
