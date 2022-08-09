docker run \
    -e APPLICATION_ID=P5DTJZHV92 \
    -e API_KEY=f2d7fe7f5bf7026e05a2ea5a1ee9a81f \
    -e "CONFIG=$(cat config.json | jq -r tostring)" \
    algolia/docsearch-scraper:v1.13.0
