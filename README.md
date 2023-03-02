# Структура проекта #

## bin ##

содержит параметры для запуска сервера на express

## cfg ##

конфигурация для сборки webpack

## dist ##

точка сборки проекта

## src ##

исходные файлы

1. assets - содержит ресурсы (шрифты, иконки, картинци)
2. client - содержит index.js для клиентской части приложения
3. server - содержит index.js для серверной части приложения
4. hook - содержит хуки для работы React в файле <b> useWebRTSData </b> - подключение и вывод WebRTS потока
5. sass - папка со стилями
6. shared - содержит компоненты React
7. store - локальное хранилище, включая работу с внешними данными, организация получение GET запросов, отправка POST
   запросов
8. types - это описание типов для работы typeScript и webpack
9. utils - всомогательные js функции для работы приложения
10. videos - содержит видеофайлы (по факту используются для тестирования плеера)

## db.json ##

файл для работы тестового <a href="https://github.com/typicode/json-server" title="ссылка на  github">json-server</a>
используется для имитации сервера (в основном GET запросы)

это json файл ключи первого уровня - это адреса для запроса

*пример*

`"login": { "login": "user", "password": "111", "accessToken": "e...rt5y} `

отправляет HTTP запрос методом GET с адреса http://localhost:5000/login

## CommonService.ts ##

`src/store/CommonService.ts `

работает с хранилищем <a href="https://redux-toolkit.js.org/rtk-query/usage/examples#examples-overview">redux toolkit (
RTK Query)</a>

отвечает за отправку и получение внешних данных с сервера

`baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),`

содержит базовый url используемый для http запросов

`endpoints: ({})` - объект со всеми запросами,

где `build.query` - отвечает за **получение** данных,
а  `build.mutation` за **изменение** данных

каждый в настройках содержит `url: '/points'`, который работает соответственно с *http://localhost:5000/points*

**структура url** соответствует структуре файлов в папке **store**  внутри каждой можно найти описание типов получаемых
данных








