# 8. Домашнее задание к лекции «EventSource, WebSockets»

[Ссылка на задание](https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/sse-ws/README.md)

[![Build status](https://ci.appveyor.com/api/projects/status/e18kre94op63oxrd?svg=true)](https://ci.appveyor.com/project/Zunickx/ahj-chat-frontend)

![CI](https://github.com/Zunickx/ahj-chat-frontend/actions/workflows/web.yml/badge.svg)

Правила сдачи задания:

1. **Важно**: в рамках этого ДЗ можно использовать любой менеджер пакетов
2. Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor
3. В README.md должен быть размещён бейджик сборки и ссылка на Github Pages
4. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проекты
5. Авто-тесты писать не требуется
6. Серверная часть должна быть выложена на Render. Посмотрите инструкцию или документацию, как развертывать серверную часть на Render.

---

## 8.1 Чат (Frontend)

### Легенда

В рамках реализации корпоративного портала вам поручили организовать чат, и, конечно же, вы решили для этого использовать веб-сокеты.

### Описание

Вам необходимо реализовать и серверную, и клиентскую часть. Серверную часть мы предлагаем вам реализовать на базе пакета ws, который был продемонстрирован на лекции.

При загрузке страницы появляется всплывающее окно, в котором запрашивается никнейм, под которым вы будете зарегистрированы в чате