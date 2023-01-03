FROM denoland/deno:1.29.1

ARG REVISION
ENV DENO_DEPLOYMENT_ID=${REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts --import-map=import_map.json \
    https://deno.land/x/fresh@1.1.2/src/runtime/main.ts \
    https://deno.land/x/fresh@1.1.2/plugins/twind/main.ts

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
