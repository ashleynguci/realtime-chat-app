# setup-env.sh

# Create .env file from env-cloud template
cp env-cloud .env

# Replace placeholders with secret values
sed -i "s/GARANT_ADMIN_PASSWORD=/GARANT_ADMIN_PASSWORD=${GARANT_ADMIN_PASSWORD}/" .env
sed -i "s/CLIENT_ID=/CLIENT_ID=${CLIENT_ID}/" .env
