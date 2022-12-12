---
## Front matter
title: "Отчет по лабораторной работе No8"
subtitle: "Дисциплина: архитектура компьютера"
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
biblatex: false
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

Познакомиться с программой ветвлений, изучить команды условного и безусловного перехода

# Задание

Написать программу с использованием ветвлений


# Выполнение лабораторной работы

1. Создаём файл lab8-1.asm и открываем его.

![Создание каталога](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/01.jpg){ #fig:001 width=70% }

2.Записываем в файл код из листинга, откомпилируем и запускаем файл 

![Запуск кода](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/02.jpg){ #fig:002 width=70% }

3. Теперь изменяем код программы и смотрим результат

![Измененный код из листинга](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/03.jpg){ #fig:003 width=70% }

![Результат программы](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/12.jpg){ #fig:004 width=70% }

4. Создаём новый файл lab8-2.asm, записываем в него предложенный код и смотрим на результат при разных значениях переменных

![Нахождение максимального числа](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/04.jpg){ #fig:005 width=70% }

5. С помощью команды nasm -f elf -l lab8-2.lst lab8-2.asm создаём файл листинга
    
![Вывод файла листинга](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/06.jpg){ #fig:006 width=70% }

6. Изменяем код и видим, что выводится ошибка

![Удаление](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/07.jpg){ #fig:07 width=70% }

![Вывод ошибки](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/08.jpg){ #fig:08 width=70% }

# Самостоятельная работа

1. Мне выпал вариант 17, создаем файлы lab8-3.asm и lab8-4.asm, пишем код и выводим результат 

![Первая задача](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/09.jpg){ #fig:09 width=70% }

![Вторая задача](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/10.jpg){ #fig:010 width=70% }

![Результаты](/home/uautochkina/work/study/2022-2023/Архитектура компьютера/study_2022-2023_arch-pc/labs/lab08/report/image/11.jpg){ #fig:011 width=70% }

# Выводы

В этой работе я познакомилась с условным и безусловным переходом. А также написала программы с использованием ветвления.


