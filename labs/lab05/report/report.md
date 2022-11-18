---
## Front matter
title: "Отчёт по лабораторной работе №5"
subtitle: "Дисциплина: Архитектура компьютеров"
author: "Уточкина Ульяна Андреевна"

## Generic otions
lang: ru-RU
toc-title: "Содержание"

## Bibliography
bibliography: bib/cite.bib
csl: pandoc/csl/gost-r-7-0-5-2008-numeric.csl

## Pdf output format
toc: true # Table of contents
toc-depth: 2
lof: true # List of figures
lot: true # List of tables
fontsize: 12pt
linestretch: 1.5
papersize: a4
documentclass: scrreprt
## I18n polyglossia
polyglossia-lang:
  name: russian
  options:
	- spelling=modern
	- babelshorthands=true
polyglossia-otherlangs:
  name: english
## I18n babel
babel-lang: russian
babel-otherlangs: english
## Fonts
mainfont: PT Serif
romanfont: PT Serif
sansfont: PT Sans
monofont: PT Mono
mainfontoptions: Ligatures=TeX
romanfontoptions: Ligatures=TeX
sansfontoptions: Ligatures=TeX,Scale=MatchLowercase
monofontoptions: Scale=MatchLowercase,Scale=0.9
## Biblatex
biblatex: true
biblio-style: "gost-numeric"
biblatexoptions:
  - parentracker=true
  - backend=biber
  - hyperref=auto
  - language=auto
  - autolang=other*
  - citestyle=gost-numeric
## Pandoc-crossref LaTeX customization
figureTitle: "Рис."
tableTitle: "Таблица"
listingTitle: "Листинг"
lofTitle: "Список иллюстраций"
lotTitle: "Список таблиц"
lolTitle: "Листинги"
## Misc options
indent: true
header-includes:
  - \usepackage{indentfirst}
  - \usepackage{float} # keep figures where there are in the text
  - \floatplacement{figure}{H} # keep figures where there are in the text
---

# Цель работы
Освоение процедуры компиляции и сборки программ, написанных на ассемблере NASM

# Задание
Изучить ассемблер NASM.

# Теоретическое введение

**Язык ассемблера** - машиноориентированный язык низкого уровня. Можно считать, что он больше других языков приближен к архитектуре ЭВМ и ее аппаратным возможностям, что позволяет получить к ним более полный доступ, нежели в языках высокого уровня. Для каждой архитектуры существует свой ассемблер и, соответственно, свой язык ассемблера.

**NASM** - это открытый проект ассемблера, версии которого доступны под различные операционные системы и который позволяет получать объектные файлы для этих систем.

# Выполнение лабораторной работы

## Программа Hello world!

1. Создала каталог для работы с программами на языке ассемблера NASM. Перешла в созданный каталог. Создала текстовый файл с именем hello.asm. Открыла созданный файл с помощью текстового редактора gedit. (рис. [-@fig:001]),(рис. [-@fig:002])

![Создание каталога. Переход в каталог. ](image/01.jpg){ #fig:001 width=70% }
![Создание текстового файла.]Открытие файла.](image/02.jpg){ #fig:002 width=70% }

2. Ввела в файл нужный текст. (рис. [-@fig:003])

![Преобразование текста](image/03.jpg){ #fig:003 width=70% }

## Транслятор NASM

1. Преобразование текста программы в объектный код. (рис. [-@fig:004])

![Преобразование текста](image/04.jpg){ #fig:004 width=70% }

2. Компиляция файлов (рис. [-@fig:005])

![Компиляция](image/05.jpg){ #fig:005 width=70% }


3. Для подробной информации я использовала 'man nasm' (рис. [-@fig:006])

![Ввод](image/06.jpg){ #fig:006 width=70% }

4. Вывод   (рис. [-@fig:007])

![Вывод](image/07.jpg){ #fig:007 width=70% }

5. Получаю список форматов объектного файла (рис. [-@fig:008])

![Ввод и вывод](image/08.jpg){ #fig:008 width=70% }

## Компоновщик LD

1. Передала объектный файл на обработку компоновщику  (рис. [-@fig:009]) 

![Передача объектного файла](image/09.jpg){ #fig:009 width=70% }

2. Проверяем выполнение команды (рис. [-@fig:010]) 

![Проверка] (image/10.jpg){ #fig:010 width=70% }

3. Более подробная информация, ввод и выполнение команды. (рис. [-@fig:011]),(рис. [-@fig:012]),(рис. [-@fig:013])

![Формат командной строки](image/11.jpg){ #fig:011 width=70% }

![Ввод команды](image/12.jpg){ #fig:012 width=70% }

![Выполнение команды](image/13.jpg){ #fig:013 width=70% }


4. Запустила на выполнение созданный исполняемый файл. (рис. [-@fig:014])

![Запуск файла](image/14.jpg){ #fig:014 width=70% }

## Задания для самостоятельной работы

1. Создала копию файла hello.asm с именем lab05.asm в каталоге ~/work/arch-pc/lab05. (рис. [-@fig:015])

![Копирование файла](image/sr1.jpg){ #fig:015 width=70% }

2. Перешла в текстовый редактор (рис. [-@fig:016])

![Переход](image/sr2.jpg){ #fig:016 width=70% }


2. Внесла изменения в текст программы в файле lab05.asm., оттранслировала и выполнила компановку объектного файла (рис. [-@fig:017])

![Внесение изменений](image/sr4.jpg){ #fig:017 width=70% }

3. Запустила получившийся исполняемый файл. (рис. [-@fig:018])

![Запуск](image/sr3.jpg){ #fig:018 width=70% }

# Вывод

Я освоила процедуры компиляции и сборки программ, написанных на ассемблере NASM.


# Список литературы{.unnumbered}

::: {#refs}
:::
