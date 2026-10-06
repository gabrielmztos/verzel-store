# Verzel Store — QA

Projeto de testes realizado para a avaliação técnica da Verzel Store.

## Objetivo

Validar as principais regras de negócio relacionadas a cupons de desconto e cálculo de frete, utilizando testes manuais, exploratórios, testes de API e automação com Playwright.

## Testes automatizados

Foram automatizados 3 cenários:

* **CT-001** — Aplicar cupom válido `BEMVINDO10`
* **CT-004** — Aplicar cupom inexistente
* **CT-008** — Validar frete para subtotal abaixo de R$ 200

Os testes foram executados em Chromium, Firefox e WebKit.

## Resultado dos testes automatizados

* 3 cenários automatizados
* 3 navegadores
* 9 execuções
* **9/9 testes passaram**

## Bugs encontrados

Durante a execução dos testes manuais e de API, foram identificados 2 defeitos:

### BUG-001 — Cupom expirado tratado como inválido

O cupom `VERAO2026`, que está expirado, retorna a mensagem `Cupom inválido.` em vez de `Cupom expirado.`.

### BUG-002 — Frete grátis não aplicado para subtotal de R$ 200,00

Para um subtotal exatamente igual a R$ 200,00, o sistema cobra R$ 19,90 de frete, apesar da regra determinar frete grátis a partir de R$ 200,00.

O defeito foi reproduzido tanto na interface quanto na API.

## Estrutura do projeto

```text
Verzel-testes/
├── tests/
│   └── verzel-store.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Como executar

Instalar as dependências:

```bash
npm install
```

Executar todos os testes:

```bash
npx playwright test
```

Executar somente no Chromium:

```bash
npx playwright test --project=chromium
```

## Evidências

As evidências dos testes manuais e de API estão organizadas separadamente e identificadas pelo ID de cada cenário.

## Uso de IA

A IA foi utilizada como apoio durante o desenvolvimento do projeto, principalmente para esclarecer conceitos de Playwright, auxiliar na estruturação dos testes e revisar a documentação.

A implementação, execução dos testes, análise dos resultados e identificação dos defeitos foram realizadas e validadas pelo candidato.
