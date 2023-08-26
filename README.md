# Домашнее задание к лекции «Модули»

### **Важные моменты** 

1. Каждая задача выполняется в виде отдельного проекта с собственным репозиторием на GitHub.
2. На эти задачи не распространяется требование отсутствия ошибок в ESLint, но вы можете его запустить и изучить появившиеся ошибки.
3. Решения должны быть построены на базе [шаблона webpack](/ci-template) (для задач под номерами 1 и 2).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

---

## webpack

### Легенда

Ваш проект масштабировался, и его нужно разделить на модули. Модули помогают обеспечить изолированность кода и внести порядок в проект. Но для работы с модулями необходимо настроить загрузчик модулей. Проверьте с помощью сервиса [caniuse.com](http://caniuse.com/), что модули поддерживаются не везде.

### Описание

Используйте эту структуру, чтобы настроить экспорт в бандл:
- каталог `src`:
  - каталог `css`
    - файл `style.css` (в качестве содержимого используйте `body { color: #999; }`)
  - каталог `js`
    - файл `app.js` (в качестве содержимого используйте `console.log('app worked')`)
  - файл `index.html` (шаблон для HTMLWebpackPlugin) (содержимое файла произвольно, скрипты и стили должны подключаться автоматически за счёт использования HTMLWebpackPlugin и MiniCssExtractPlugin)
  - файл `index.js` (webpack entry point)
- файл `webpack.config.js`
- файл `package.json`
- другие файлы

Убедитесь, что после экспорта бандл запускается и работает. Для этого создайте скрипт в npm, который запускает HTTP-сервер для каталога `dist`. HTTP-сервер выберите сами.

---

## Import/Export

### Легенда

Вы успешно настроили загрузку модулей с webpack и сборку приложения. Пришло время грамотно разделить всё на модули.

### Описание

Разделите всё приложение на модули:
1. Модуль Domain, где будет храниться логика предметной области: персонажи, атаки и т. д.
3. Модуль Game, отвечающий за работу приложения: загрузку и сохранение.
4. Модуль App, отвечающий за запуск приложения.

Заглушки для модулей:

файл `domain.js`:
```javascript
class Character {
}
```

файл `game.js`
```javascript
class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}
```

файл `app.js`
```javascript
const game = new Game();
game.start();
```

Что нужно сделать:
- организуйте из модуля `domain` экспорт класса `Character` в качестве дефолтного;
- в модуле `game` сделайте импорт класса `Character`;
- организуйте экспорт из модуля `game` класса `Game` в качестве дефолтного, класса `GameSavingData` и функций `readGameSaving` и `writeGameSaving`;
- в модуле `app.js` одним импортом импортируйте `Game`, `GameSavingData` и функции `readGameSaving`, `writeGameSaving`. Их при импорте переименуйте в `loadGame` и `saveGame` соответственно.

С функциями и классами ничего делать не нужно. Необходимо только правильно расставить инструкции `import`/`export`.
