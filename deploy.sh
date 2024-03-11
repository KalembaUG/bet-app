name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Set up environment
        run: |
          # Set CI to false explicitly
          echo "CI=false" >> $GITHUB_ENV
      - name: Build
        run: |
          npm install
          npm run build
      
      - name: Send Deployment Webhook
        run: |
          curl -X POST -H "Content-Type: application/json" -d '{"ref": "${{ github.ref }}", "repository": "${{ github.repository }}", "build_folder": "build"}' https://webhooks.hostinger.com/deploy/2ae9a0529577f8adc20668c6a181df3a
