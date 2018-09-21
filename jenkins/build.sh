#!/usr/bin/env bash
source /usr/local/node_versions/set_node_version.sh 0.12.7
npm install
npm run build
npm run tarDistDate
# Use Conditional Step to find error, search for Cannot resolve module
# ...bash
# echo "detected build error. Failing build"
# exit 1
