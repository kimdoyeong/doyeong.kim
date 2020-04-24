---
title: Github Actions로 Github Page 자동 배포
description: 편하게 블로그를 운영해보자
date: 2020-04-24
lang: ko
image: ./thumbnail.png
---

Github Actions는 Github 레포지토리에 연동해서 사용할 수 있는 워크플로우 자동화 시스템입니다. 특정 액션 (push, pull_request 등)이 실행되면, Action도 실행되어 빌드 명령어 한 번 치지 않고 빠르게 배포를 완료할 수 있습니다.

오늘은 이 Github Actions를 가지고, Github Page를 자동 배포하는 방법을 작성하고자 합니다.

# 준비해야 할 것

- 개발된 블로그: 저는 [Gatsby](https://www.gatsbyjs.org/)로 블로그를 개발했습니다. 만약 빌드할 필요가 없는 웹사이트라면, 이 글의 내용을 따르실 필요가 없고, 그냥 `master` 브랜치에 push만 하시면 바로 보실 수 있습니다. (주의사항: 개발하고 있는 원본 소스는 `master` 브랜치가 아닌 다른 브랜치에 올려주세요. [제 레포지토리](https://github.com/kimdoyeong/kimdoyeong.github.io)에서 어떻게 하는지 확인하실 수 있습니다.)
- Github
- Git
- [Github Personal Access Token](https://github.com/settings/tokens)

# 작업

## Actions Workflow 작성하기

`.github/workflows`에 `deploy.yml` 파일을 만들어주시고, 다음과 같이 적어주세요.

```yml
name: Deploy Project
on:
  push:
    branches:
      - dev
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Set up Node.js
        uses: actions/setup-node@master
        with:
          node-version: 12.x
      - name: Cache node_modules
        uses: actions/cache@v1
        with:
          path: node_modules
          key: ${{runner.OS}}-build-${{hashFiles('**/yarn.lock')}}
          restore-keys: |
            ${{ runner.OS }}-build-${{ runner.OS }}-
      - name: Install dependencies
        run: yarn install --prod --pure-lockfile

      - name: Build
        run: yarn run build
        env:
          NODE_ENV: production
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v2.5.0
        env:
          PERSONAL_TOKEN: ${{secrets.GH_PAT}}
          PUBLISH_BRANCH: master
          PUBLISH_DIR: ./public
          SCRIPT_MODE: true
```

아래 설명을 하나하나 보시고, 바꾸실 부분이 있다면 바꾸시면 됩니다.

- `name`: Action의 이름입니다.
- `on`: 해당 Action이 실행될 이벤트입니다. 저는 `dev` 브랜치가 push될 때 실행되도록 하였습니다. 다른 브랜치가 push될때도 이 액션을 실행하고 싶으시다면, `- dev` 밑에 그 브랜치의 이름을 추가해주세요.
- `jobs`: 실행될 명령어들입니다. 순차적으로 실행됩니다. 아래 `update`는 job id입니다.
  - `runs-on`: 해당 명령어들이 실행될 환경입니다. 저는 가장 최신 버전의 우분투에서 실행하도록 하였습니다.
  - `steps`: 명령어입니다. `uses`를 이용하여 이미 만들어진 Action을 사용할 수도 있고, `run`을 통해 명령어를 실행합니다.

해당 액션은 다음 워크플로우를 따릅니다.

- `checkout`: `$GITHUB_WORKSPACE` 아래에 파일들을 checkout합니다.
- `actions/setup-node@master`: node.js를 Set-up합니다.
- `actions/cache@v1`: `node_modules` 폴더를 cache하여, 더 빠르게 Action을 실행할 수 있게 합니다.
- `yarn install`을 실행해 종속성을 설치합니다.
- `yarn run build`를 이용해 빌드합니다.
- `peaceiris/actions-gh-pages@v2.5.0`을 이용해 master 브랜치에 빌드된 파일들을 옮깁니다. 이 때, [Github Personal Access Token](https://github.com/settings/tokens)이 필요합니다.

저장하고, 일단은 커밋해둡니다.

## 레포지토리 설정하기

`Settings` -> `Secrets`에 들어갑니다. `Add a new secret`을 클릭해 Name을 `GH_PAT`으로 하고, 아까 발급한 Personal Access Token 값을 `Value`에 넣고 Add Secret을 누릅니다.

`Secrets`에서는 엑세스 토큰과 같이 공개돼서는 안되는 민감한 정보들을 다루는 데에 사용합니다.

## Push하고 확인하기

자, 이제 푸시하고 `Actions` 탭에서 액션이 제대로 실행되는지 확인해 봅시다.

# 마무리

글을 쓰는데는 잘 익숙해지지 않네요. 만약 틀린 내용이 있거나 질문이 있다면 [hello@doyeong.dev](mailto:hello@doyeong.dev)로 이메일 보내주세요.
