# marmot-web

---

[![docker pull][docker-image]][docker-url]

[docker-image]: https://img.shields.io/docker/pulls/marmotjs/marmot-web.svg?style=flat-square
[docker-url]: https://hub.docker.com/r/marmotjs/marmot-web/

## production

should launch `marmot-myslq` service first.

```bash
$ docker run --name marmot-web \
  -p 9900:9900 \
  -e MARMOT_HOST=127.0.0.1 \
  --link marmot-mysql:mysql-host \
  marmotjs/marmot-web
```

run as a service

```bash
$ docker run --name marmot-web \
  -p 9900:9900 \
  -e MARMOT_HOST=127.0.0.1 \
  --link marmot-mysql:mysql-host \
  -d marmotjs/marmot-web
```

open http://127.0.0.1:9900

if you want another hostname, please replace the `127.0.0.1`

---

Just for developer

## build image

```bash
$ cd ${PROJECT_ROOT_PATH}
$ docker build -t marmotjs/marmot-web .
$ docker push marmotjs/marmot-web
```

## development

```bash
npm run dev
```
