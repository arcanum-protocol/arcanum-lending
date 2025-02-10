FROM node:22.13.1 AS base
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm && pnpm install

FROM base AS test
ENV PW_TEST_HTML_REPORT_OPEN='never'
WORKDIR /app
COPY --from=base /app /app
COPY ./public ./public
COPY ./tests ./tests
COPY ./src ./src
COPY playwright.config.ts tailwind.config.mjs tsconfig.json ./
RUN pnpm exec playwright install --with-deps
RUN pnpm exec playwright test

FROM base AS build
WORKDIR /app
COPY --from=base /app /app
COPY ./public ./public
COPY ./src ./src
COPY astro.config.mjs tailwind.config.mjs ./
RUN pnpm build

FROM nginx:stable-alpine AS final
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]