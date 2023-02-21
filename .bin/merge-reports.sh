#!/bin/bash

artifactsDir="./cypress/artifacts"

# Check if tests run successfully and reports are generated in order to handle them
if [[ "$(ls -A ${artifactsDir}/reports)" ]]; then
    printf ">> End of tests cycle.. Merging reports..\n\n"
    npx mochawesome-merge ${artifactsDir}/reports/*.json > "${artifactsDir}/reports/output.json"

    printf ">> Clean up mochawesome*.json files..\n\n"
    rm ${artifactsDir}/reports/mochawesome*.json

    printf ">> Generate HTML report from output.json..\n\n"
    npx marge "${artifactsDir}/reports/output.json" --reportDir ${artifactsDir}/reports --inline
fi