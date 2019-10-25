![Daniela Maksoud Logo](http://sempregatas.com.br/imagens/Logo.png)

# Primeiro Trabalho de INF1305 (Tópicos em Computação II - Blockchain)

## Aluna

- Daniela Brazão Maksoud

## Contribuição

- **[@barbara-herrera](https://github.com/barbara-herrera)**
- **[@eduardomaksoud](https://github.com/eduardomaksoud)**
- **[@thiagola92](https://github.com/thiagola92)**

## Professores

- Gustavo Robichez de Carvalho
- Rafael Nasser

## Enunciado

O trabalho é individual e consiste no desenvolvimento de um dApp (decentralized app) Ethereum, com interface web e contrato inteligente na linguagem Solidity. O tema do trabalho é de livre escolha do aluno!

-> Apresentação em 5 minutos do trabalho na aula de 25/10/2019. A mesma deve ocorrer com 3 slides para contextualização do problema/solução e demonstração do dApp rodando. 

-> Submissão do trabalho nessa atividade do Google Classroom até 25/10/2019 às 10:59. A submissão deve ser feita em um único arquivo compactado na extensão ".zip", contendo todos os artefatos necessários a avaliação do dApp desenvolvido, incluindo o contrato inteligente (.sol), assim como outros materiais utilizados na apresentação (ex. slides).

São critérios de avaliação: 
- a) Problema e Solução propostas frente ao uso de blockchain e sua relevância;
- b) Cumprimento das orientações (prazos, artefatos, apresentação e submissão);
- c) Qualidade do trabalho entregue.

## Arquivos

| Nome do Arquivo | Descrição |
| ------------- | ------------- |
| prescription_contract.sol  | Contrato inteligente. |
| index.html | Página principal.  |

## Recursos Utilizados

- **[Remix Ethereum IDE](https://remix.ethereum.org/)**
- **[web3.js](https://web3js.readthedocs.io/)**
- **[How To Build Ethereum Dapp (Decentralized Application Development Tutorial)](https://www.youtube.com/watch?v=3681ZYbDSSk&feature=youtu.be)**
- **[Homebrew](https://brew.sh/index_pt-br)**
- **[Node.js](https://nodejs.org/en/)**
- **[Truffle Suite](https://www.trufflesuite.com/)**
- **[Google Chrome](https://www.google.com/intl/pt-BR/chrome/)**
- **[MetaMask](https://metamask.io/)**
- **[Sublime Text](https://www.sublimetext.com/)**
- **[Ethereum-Solidity language syntax in Sublime](https://medium.com/coinmonks/ethereum-solidity-language-syntax-in-sublime-1532e6f3646d)**
- **[solidity code compilation error?](https://ethereum.stackexchange.com/questions/66104/solidity-code-compilation-error)**
- **[Relação de Medicamentos Essenciais para a Rede de Atenção Básica](http://www2.fm.usp.br/gdc/docs/cseb_17_REMUME_Rede_Basica.pdf)**
- **[TypeError: Data location must be “storage” or “memory” for parameter in function, but none was given
](https://ethereum.stackexchange.com/questions/63294/typeerror-data-location-must-be-storage-or-memory-for-parameter-in-function)**
- **[Web3: How do I get just the first account on testrpc using web3.eth.getAccounts()?
](https://ethereum.stackexchange.com/questions/31967/web3-how-do-i-get-just-the-first-account-on-testrpc-using-web3-eth-getaccounts)**
- **[Election Repository](https://github.com/dappuniversity/election/tree/2019_update)**

## Instalando o Homebrew no macOS

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Instalando o Node.js no macOS

```
brew install node
```

## Instalando o Truffle no macOS

```
npm install truffle -g
```

## Baixando Exemplo de Pet Shop do Truffle

```
truffle unbox pet-shop
```

## Fazendo Deploy do Contrato com o Truffle

```
truflle migrate
```

## Acessando o Console do Truffle

```
truffle console
```

## Acessando o Contrato com o Truffle

``` 
Prescription.deployed().then(function(instance) { app = instance })
```

## Verificando o Endereço do Contrato com o Truffle

```
app.address
```

## Verificando uma Variável do Contrato com o Truffle

```
app.medication()
```

## Saindo do Console do Truffle

```
.exit
```

## Dando Reset no Truffle

```
truffle migrate --reset
```

## Instanciar uma medication no Truffle

```
app.medications(1).then(function(c) { medication = c; })
```

## Acessar os Atributos da struct medication

```
medication[0]
medication[1]
medication[2]
```

## Converter Atributo para Número

```
medication[0].toNumber()
```

## Obter Contas do Truffle

```
web3.eth.getAccounts()
```

## Obter Conta Específica do Truffle

```
web3.eth.getAccounts().then(function(acc) { accounts = acc; });
accounts[0]
accounts[1]
...
```

## Iniciar Lite Server

```
npm run dev
```
