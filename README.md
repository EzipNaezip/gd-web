<div align="center">

<img  width="150" src="https://github.com/EzipNaezip/gd-app/assets/39869096/89a6d6c4-f08e-4b98-8b53-be7036eef66c"/>

<p><b>이집내집</b></p>

![build](https://img.shields.io/badge/build-1.0.0-brightgreen?logo=github)
![hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FEzipNaezip&count_bg=%2379C83D&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)

**당신만의 인테리어 디자이너 AI와 함께하세요!**

[🏠 팀에 대해](https://github.com/EzipNaezip)
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
[📄 기획서 보기](https://github.com/EzipNaezip/documentation)
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
[🖥️ 서비스 바로가기]()

</div>

이집내집은 사용자의 인테리어 요구사항을 채팅을 통해 분석하고 AI 이미지 생성 기술을 활용하여 쉽고 편리하게 인테리어 디자인을 제공하는 서비스입니다. 사용자들은 전문적인 디자인 지식이 없이도 편리하게 인테리어 디자인을 할 수 있도록 도와 손쉽게 시각적으로 표현하고 디자인 할 수 있습니다.

- Mobile First Design 설계로 반응형을 통해서 쉽게 모바일, 태블릿, 데스크톱을 대응했습니다.

## Features

| <img alt="구글 로그인" src="https://github.com/EzipNaezip/gd-app/assets/39869096/f868c00e-85b8-49eb-bfca-9c931974bb96"> | <img alt="인테리어 생성" src="https://github.com/EzipNaezip/gd-app/assets/39869096/ad04a736-0c54-495b-964c-6df386da6345"> | <img alt="커뮤니티" src="https://github.com/EzipNaezip/gd-app/assets/39869096/d33daa97-55cb-4e5f-9432-7f00d477ce5d"> |
| :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
|                                                        구글 소셜 로그인                                                        |                                                           인테리어 생성                                                            |                                                       커뮤니티                                                       |

| <img alt="메인화면" src="https://github.com/EzipNaezip/gd-app/assets/39869096/75400823-e6cf-47d0-88ae-ab0c143f519a"> | <img alt="검색" src="https://github.com/EzipNaezip/gd-app/assets/39869096/84edbad6-58e0-4f80-bbe5-9f6d4f573e56"> | <img alt="마이페이지" src="https://github.com/EzipNaezip/gd-app/assets/39869096/92b6e479-ebfa-4b33-a7d9-a7b557fb6f01"> |
| :------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
|                                                       메인화면                                                       |                                                       검색                                                       |                                                       마이페이지                                                       |

## Architecture

<img width="800" alt="Devops" src="https://github.com/EzipNaezip/gd-app/assets/39869096/06178c52-616d-4d92-89ad-6ddf1ca5e61c">

주요 브랜치에 대한 풀 리퀘스트가 성공적으로 이루어지면, `Jenkins`는 `GitHub Hook`을 통해 이를 감지하여 자동으로 테스트 및 빌드 과정을 시작합니다. 이 과정에서 발생하는 에러 없이 빌드가 성공적으로 완료되면, `Publish Over SSH` 기능을 이용하여 빌드된 산출물이 Nginx의 지정된 라우트 경로로 전송됩니다. 이후, Nginx의 리버스 프록시 기능을 통해 요청이 정적으로 라우팅되어 사용자에게 제공되는 구조입니다.

## Skills

| 분야             | 스킬                                                                                                                                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core             | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black) |
| State Management | ![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white)                                                                                                                  |
| Data Fetching    | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white) ![React Query](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=white)   |
| Styling          | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white)                                                                                                   |
| Package Manager  | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white)                                                                                                                        |
| CI&CD            | ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=Jenkins&logoColor=white)                                                                                                               |

## Commit Message Convention

| 제목     | 내용                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| init     | 작업 세팅 커밋 (패키지 설치 등)                                                  |
| feat     | 새로운 기능을 추가할 경우                                                        |
| style    | 기능에 영향을 주지 않는 커밋, 코드 순서, css등의 포맷에 관한 커밋                |
| fix      | 버그를 고친 경우                                                                 |
| refactor | 코드 리팩토링                                                                    |
| docs     | 문서를 수정한 경우, 파일 삭제, 파일명 수정 등 ex) README.md                      |
| chore    | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우, 주석 추가, 자잘한 문서 수정 |

## Members

| <img src="https://avatars.githubusercontent.com/u/53262430?v=4" width="96" /> | <img src="https://avatars.githubusercontent.com/u/39869096?v=4" width="96" /> | <img src="https://avatars.githubusercontent.com/u/88099593?v=4" width="96" /> |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|                      [신현호](https://github.com/SWARVY)                      |                     [김관식](https://github.com/gwansikk)                     |                     [김상후](https://github.com/gwansikk)                     |

## ETC

- [gd-app](https://github.com/EzipNaezip/gd-app) - 안드로이드
- [gd-server](https://github.com/EzipNaezip/gd-server) - 서버&인프라
