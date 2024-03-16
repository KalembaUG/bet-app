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
      - name: Verify Build Output
        run: |
          # List the files in the main folder for debugging purposes
          ls -l
      
     - name: Deploy to Hostinger
        uses: easingthemes/ssh-deploy@v2.1.5
        with:
          server: ${{ secrets.HOSTINGER_HOST }}
          username: ${{ secrets.HOSTINGER_USERNAME }}
          password: ${{ secrets.HOSTINGER_PASSWORD }}
          local_path: ./build
          remote_path: /path/to/your/website
          args: -avz --delete
