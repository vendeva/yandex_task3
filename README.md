# Задание 3. Найдите ошибки

## Запуск сервера

-   Установить флаг режима --mode development в свойстве scripts файла package.json для сценария start

## Ошибки добавления стилей

-   Файл view.ts, строка 41: для смены класса темы использовать elem.className, необходимо перезаписывать класс, а не добавлять
-   Файл index.css, строка 41: класс .slide-progress-value значение height 4px, а не 4
-   Файл stories.css, строки 8 - 14: блок .slide div значение cursor pointer для отображения курсора на интерактивных элементах внутри слайда, блок .slide span добавить отступы слева и справа от текста для улучшения визуализации
-   Файлы index.html, frame.html тема по умолчанию темная, необходимо установить класс .theme_dark тега body вместо .theme_light

## Ошибки программирования

-   Файл actions.ts, строка 24: в тип Action добавлен тип возвращаемого значения actionUpdate
-   Файл index.ts, строка 65: исправлен диспатчинг действия при клике на кнопку NEXT на dispatch(actionNext())
-   Файл state.ts, строка 9: иправлено значение theme в DEFAULT_STATE (состояние по умолчанию) на dark
-   Файл effects.ts, строка 15-16: необходимо удалить take(5), так как переключение на следующий слайд зависит не от определенного числа, а от достижения интервала 7 секунд и от параметра pause текущего состояния, которое переключается в значение true при достижении последнего слайда при обработке действия next в функции data (файл data.ts), поэтому добавлено условие в строке выше s.progress >= DELAY && !s.pause, при таком условии выполняется переключение на следующий слайд (если интервал более 7 секунд или параметр pause в значении false), иначе переключение не происходит
-   Файл selectors.ts, строка 25: необходимо удалить строку mergeMapTo(EMPTY), так как необходимо наблюдать текущий индекс слайда, чтобы применять соответствующие стили для анимации слайда и прогресс-бара, в противном случае происходит завершение наблюдения
-   Файл public/stories.js: выводить вместо json строки data значение data.color, если его нет, то переменная text равна "black" по умолчанию как и color, если color в формате hex, то нажата кнопка pink и выводить "pink"
-   Файл src/application/data.ts, строка 65: исправлено draft.stories[draft.index], обновляем alias текущего слайда по текущему индексу, а не первого слайда по нулевому индексу
-   Файл frame.ts, строка 30: условие while (target && !Object.keys(target.dataset).length), так как необходимо проверить заполнено ли у объекта инициализатора события клика свойство dataset, если оно не заполнено, то проверить его наличие у родителя, как в данном случае с элементом <strong>PINK</strong>, после цикла while добавить строку if (!target) return в случае если пользователь кликнул в любой точке экрана и конечный родитель null без свойства dataset (необходимо прервать выполненение обработчика)

## Форматирование кода

-   frame.ts строка 34-35: выполнить Tab влево
-   Работаю в VScode, для форматирования кода использовала Prettier

## Дополнительное задание

-   Добавлены результаты первого задания: src/assets - файлы less, images, fonts, css, также в папке stories файл stories.js c функцией renderTemplate, файл dataStories.ts с данными слайдов
-   В соответсвии с этим изменен package.json, добавлены зависимости для форматирования кода eslint, prettier и т.д., а также зависомости для успешной компиляции файлов less и форматов svg, jpg такие, как less-loader, less, postcss-loader, autoprefixer, file-loader, style-loader для development режима
-   Изменен webpack.config.js: точка входа для frame добавлен путь к папке с файлами less,
    copyPlugin теперь копирует папку stories и img, в index.ts импортируется { stories } from "./dataStories"
-   В index.ts добавлен код на отслеживание изменения ориентации экрана, для слайдов activity и vote при изменении экрана необходимо отправить сообщение фрейму об обновлении данных
-   Файл src/application/data.ts строки 50-66: Для голосования в файле data.ts в функции data, получая действие update cо следующими данными: alias leaders и при наличии data, обновляется состояние текущего слайда vote и соответствующего leaders, если он есть в списке с таким же значением title, записывается в selectedUserId новое значение
-   Работает переключение страниц в vote, если disable arrow подсвечивается серым
