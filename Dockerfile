FROM node:14.18.2-buster-slim

WORKDIR note_taking

COPY . .
RUN npm install \
    npm install qs @hapi/boom @hapi/hapi tslib big.js env-cmd glob joi  keytar nanoid pg  typeorm uuid lodash.set bcryptjs dayjs 

CMD ["npm","run","docker"]
