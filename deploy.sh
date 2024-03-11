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
          curl -X POST -H "Content-Type: application/json" -d '{"ref": "${{ github.ref }}", "repository": "${{ github.repository }}", "build_folder": "build"}' https://webhooks.hostinger.com/deploy/42174b59ec72313c758f529c511feb0a
