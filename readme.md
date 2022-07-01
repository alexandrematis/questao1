# Questão 1

Dados os valores iniciais para as variáveis abaixo, encontre o resultado das operações lógicas:

unsigned int A = 0xF0FA, B = 0xAFAF;
unsigned long C = 0x0505, E;

- E = A & B; E = 0xA0AA
- E = A | B; E = 0xFFFF
- E = C << 8; E = 0x50500
- E = B & 0x5A5AU; E = 0xA0A
- E = C << 16 ? B : A; E = 0xAFAF

OBS: Para a solução implementei o script bitwiseOperators.js que roda ao comando `npm run start`
