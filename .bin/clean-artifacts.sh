#!/bin/bash

# Check if dirs are empty or not
printf "\n>> Remove artifacts from previous run..\n\n"

artifactsDir="./cypress/artifacts"
subDirs=("reports" "videos" "coverage" "screenshots");

for subDir in ${subDirs[@]}; do
    subDirCapitalized=$(echo $subDir | awk '{$1=toupper(substr($1,0,1))substr($1,2)}1')
    [ "$(ls -A ${artifactsDir}/${subDir})" ] && rm -r ${artifactsDir}/${subDir}/* || printf ">> ${subDirCapitalized} subDir is empty. Nothing to do here..\n\n";
done