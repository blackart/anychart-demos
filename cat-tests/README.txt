Приветствую тебя, мой друг, юный разработчик!

Что ты забыл на этих пыльных полках директории инсталляции?
Скорее всего тебе необходима помощь в настройке локальной имитации САТ.

Так давай-же скорее приступим к делу и не будет дратить твое драгоценное и очень важное для нашей компании время, дружок!

Первый шажочек. Структура.
  Для начала, пойди-ка в репозиторий проекта ACDVF и в папке "demos-local" создай новую - "CAT-test"
  У тебя должна получиться структура: ACDVF/demos-local/CAT-test
  Если по какой-либо причине ты запускаешь локальные примеры на исходниках компонента не из папки "demos-local", а из
  папки "out" или иной, то пиздить тебя некому, плохишь! Тогда иди и создай в корне проекта ACDVF папку "demos-local".

Шажочек второй. Установка PhantomJS.
  А) phantomjs качаем отсюды http://phantomjs.org/download.html
  Б) прописываем PATH

Шажочек третий. Размещаем файлики.
 В случае первичной инсталяции или апдейта просто копируем папку "utils" в папку "ACDVF/demos-local/CAT-test"

Еще один шажок. Горячие клавиши.

 ФОРТОЧКИ
  Настройки программы WebStorm, Tools > External Tools > +
  Добалвяем новый итем
      name "PHJS"
      description "PhatnomJS local runner"
      programm  "ПОЛНЫЙ-ПУТЬ-ДО/ACDVF/demos-local/CAT-test/utils/ws_runner.bat"
      parameter "$FilePath$"
      working directory "ПОЛНЫЙ-ПУТЬ-ДО/ACDVF/demos-local/CAT-test/utils/"

  Настройки программы WebStorm, Keymap
    ищем PHJS и биндим "ALT+SHIFT+P"


  ЯБЛОЧКИ и ПИНГВИНЧИКИ
  Настройки программы WebStorm, Tools > External Tools > +
  Добалвяем новый итем
      name "PHJS"
      description "PhatnomJS local runner"
      programm  "ПОЛНЫЙ-ПУТЬ-ДО/ACDVF/demos-local/CAT-test/utils/test_phantomjs"
      parameter "$FilePath$"
      working directory "ПОЛНЫЙ-ПУТЬ-ДО/ACDVF/demos-local/CAT-test/utils/"

  Настройки программы WebStorm, Keymap
    ищем PHJS и биндим "ALT+SHIFT+P"

Прыг
 Теперь берем из скачанного архива html-файл и кладем в папку "ACDVF/demos-local/CAT-test".
 Открываем его в WebStorm и жмякаем комбинацию "ALT+SHIFT+P" и получаем результат.
 Картиночки будут лежать в папке "CAT-test/phantomjs_screenshot"

Вот и всё!

Счастливого дня Ж)