# Exercícios - Criação de arquivos e diretórios

O objetivo dos exercícios é treinar alguns comandos iniciais no Terminal do Linux.

### Instruções:

1. Crie um diretório chamado ```unix_tests``` e navegue até ele.
2. Crie um arquivo de texto com o nome ```trybe.txt```.
3. Crie uma cópia do arquivo ```trybe.txt``` com o nome ```trybe_backup.txt```.
4. Renomeie o arquivo ```trybe.txt```.
5. Dentro de ```unix_tests```, crie um novo diretório chamado ```backup```.
6. Mova o arquivo ```trybe_backup.txt``` para o diretório ```backup```.
7. Dentro de ```unix_tests```, crie um novo diretório chamado ```backup2```.
8. Mova o arquivo ```trybe_backup.txt``` da pasta ```backup``` para a pasta ```backup2```.
9. Apague a pasta ```backup```.
10. Renomeie a pasta ```backup2``` para ```backup```.
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório ```backup```.
13. Limpe o terminal.

### Para os próximos dois exercícios, crie, de forma manual, na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado ```skills.txt```:
1. Internet
2. Unix
3. Bash
4. HTML
5. CSS
6. JavaScript
7. React
8. SQL

### Instruções:

1. Mostre na tela as 5 primeiras skills do arquivo ```skills.txt```.
2. Mostre na tela as 4 últimas skills do arquivo ```skills.txt```.
3. Apague todos os arquivos que terminem em ```.txt```.

# Exercícios - Manipulação & Busca

1. Crie um novo diretório chamado ```unix_tests_search``` e entre nele.
2. Na pasta ```unix_tests_search```, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando ```curl```.
```curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"```
3. Mostre todo o conteúdo do arquivo ```countries.txt``` na tela.
4. Mostre o conteúdo de ```countries.txt```, página por página, até encontrar a ```Zambia```.
5. Mostre novamente o conteúdo de ```countries.txt``` página por página, mas agora utilize um comando para buscar por ```Zambia```.
6. Busque por ```Brazil``` no ```countries.txt```.
7. Busque novamente por ```brazil```, mas agora utilizando o lower case.
8. Crie um novo arquivo chamado ```phrases.txt``` e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
9. Busque pelas frases que não contenham a palavra ```fox```.
10. Conte o número de palavras do arquivo ```phrases.txt```.
11. Conte o número de linhas do arquivo ```phrases.txt```.
12. Crie os arquivos ```empty.tbt``` e ```empty.pdf```.
13. Liste todos os arquivos do diretório ```unix_tests_search```.
14. Liste todos os arquivos que terminem com ```.txt```.
15. Liste todos os arquivos que terminem com ```.tbt``` ou ```.txt```.
16. Acesse o manual do comando ```ls```.