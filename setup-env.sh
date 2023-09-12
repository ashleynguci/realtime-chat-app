# setup-env.sh

# Create .env file from env-cloud template
cp .env-cloud .env

# Replace placeholders with secret values
sed "{
    s/{{GARANT_ADMIN_PASSWORD}}/$GARANT_ADMIN_PASSWORD/g
    s/{{CLIENT_ID}}/$CLIENT_ID/g
}" .env-cloud > .env
