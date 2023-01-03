FROM denoland/deno:1.29.1

ARG REVISION
ENV DENO_DEPLOYMENT_ID=${REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
